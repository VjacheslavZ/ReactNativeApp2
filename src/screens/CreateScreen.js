import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { AppHeaderIcon } from "../components/AppHeaderIcon";
import { AboutScreen } from "./AboutScreen";

export const CreateScreen = ({}) => {
  return <View style={styles.center}>
    <Text>CreateScreen</Text>
  </View>
};

CreateScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: 'Create post',
  headerLeft: (
    <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
      <Item
        title='Toggle drawer'
        iconName='ios-menu'
        onPress={() => navigation.toggleDrawer()}
      />
    </HeaderButtons>
  )
});


const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});