import React, {useState} from 'react';
import {TabView} from '@rneui/themed';
import {TabPM} from './TabPM';
import {TabTester} from './TabTester';
import useFetchApi from '../../hooks/useFetchApi';
import {Text} from 'react-native';
import {UserManagementSkeleton} from '../UserManagementSkeleton';

export const TabViewAdmin = ({index, setIndex}) => {
  const {
    data: userData,
    loading,
    setLoading,
    fetched,
    refetch,
  } = useFetchApi('/admin/manage-employee/search');
  const [refreshing, setRefreshing] = useState(false);

  const dataPM = userData.filter(user => user.role?.toLowerCase() === 'pm');
  const dataTester = userData.filter(
    user => user.role?.toLowerCase() === 'tester',
  );

  const onRefresh = () => {
    try {
      setRefreshing(true);
      refetch('/admin/manage-employee/search');
    } catch (error) {
      console.error(error);
    } finally {
      setRefreshing(false);
    }
  };

  return (
    <TabView
      value={index}
      onChange={setIndex}
      disableSwipe={loading || !fetched}>
      {loading && !fetched && <UserManagementSkeleton />}
      <TabPM
        data={dataPM}
        onRefresh={onRefresh}
        refreshing={refreshing}
        setLoading={setLoading}
        loading={loading}
      />
      <TabTester
        data={dataTester}
        onRefresh={onRefresh}
        refreshing={refreshing}
        setLoading={setLoading}
        loading={loading}
      />
    </TabView>
  );
};
