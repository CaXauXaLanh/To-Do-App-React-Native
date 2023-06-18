import {useEffect, useState} from 'react';
import apiInstance from '../constants/apiInstance';

const useFetchApi = (url, defaultData = []) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [fetched, setFetched] = useState(false);

  const fetchApi = async () => {
    if (url === '') {
      return;
    }
    setLoading(true);
    try {
      const resp = await apiInstance.get(url);
      const respData = resp;
      setData(respData.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
      setFetched(true);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return {
    data,
    setData,
    loading,
    setLoading,
    fetched,
  };
};

export default useFetchApi;
