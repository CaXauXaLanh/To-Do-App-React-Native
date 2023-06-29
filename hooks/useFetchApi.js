import {useContext, useEffect, useState} from 'react';
import {AuthContext} from '../context/AuthContext';

const useFetchApi = (url, defaultData = []) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [fetched, setFetched] = useState(false);
  const {apiInstance} = useContext(AuthContext);

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

  const refetch = async () => {
    if (url === '') {
      return;
    }
    try {
      setLoading(true);
      const resp = await apiInstance.get(url);
      const respData = resp;
      setData(respData.data);
      return respData.data;
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
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
    refetch,
  };
};

export default useFetchApi;
