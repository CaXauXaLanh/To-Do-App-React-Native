import React from 'react';
import {Avatar} from 'react-native-paper';

export const AvatarText = ({role, size = 40}) => {
  switch (role) {
    case 'pm':
      return <Avatar.Text size={size} label="PM" />;
    case 'admin':
      return <Avatar.Text size={size} label="AD" />;
    case 'tester':
      return <Avatar.Text size={size} label="TS" />;
    default:
      return <Avatar.Text size={size} label="?" />;
  }
};
