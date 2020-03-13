import React from 'react';
import { View, StyleSheet, Text, Button, FlatList } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { DATA } from "../data";
import { Post } from "../components/Post";
import { AppHeaderIcon } from "../components/AppHeaderIcon";

export const MainScreen = ({ navigation }) => {
  const openPostHandler = post => {
    navigation.navigate('Post', {
      postId: post.id,
      date: post.date,
      booked: post.booked,
    })
  };

  return (
    <View style={styles.wrapper}>
      <FlatList
        data={DATA}
        keyExtractor={(post) => post.id.toString()}
        renderItem={({ item }) => <Post post={item} onOpen={openPostHandler}/>}
      />
    </View>
  )
};

MainScreen.navigationOptions = {
  headerTitle: 'My block',
  headerRight: (
    <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
      <Item
        title='Take photo1'
        iconName='ios-camera'
        onPress={() => console.log('press photo 1')}
      />
    </HeaderButtons>
  ),
  headerLeft: (
    <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
      <Item
        title='Toggle drawer'
        iconName='ios-menu'
        onPress={() => console.log('press photo 1')}
      />
    </HeaderButtons>
  )
};

const styles = StyleSheet.create({
  center: {
    padding: 10,
  }
});