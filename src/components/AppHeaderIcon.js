import React from 'react';
import { Platform  } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { THEME } from "../theme";
import { HeaderButton } from 'react-navigation-header-buttons';

export const AppHeaderIcon = props => (
  <HeaderButton
    {...props}
    iconSize={24}
    IconComponent={Ionicons}
    color={Platform.OS === 'android' ? '#fff': THEME.MAIN_COLOR}
  />
);