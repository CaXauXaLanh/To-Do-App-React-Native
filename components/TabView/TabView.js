import TabViewProfile from './TabViewProfile';
import TabViewSettings from './TabViewSettings';
import React from 'react';
import {TabView} from '@rneui/themed';

export const TabViewContain = ({index, setIndex}) => {
  return (
    <TabView value={index} onChange={setIndex} animationType={'spring'}>
      <TabViewProfile />
      <TabViewSettings />
    </TabView>
  );
};
