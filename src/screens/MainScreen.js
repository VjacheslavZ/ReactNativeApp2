import React from 'react';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { DATA } from "../data";
import { Post } from "../components/Post";
import { AppHeaderIcon } from "../components/AppHeaderIcon";
import { PostList } from "../components/PostList";

export const MainScreen = ({ navigation }) => {
  const openPostHandler = post => {
    navigation.navigate('Post', {
      postId: post.id,
      date: post.date,
      booked: post.booked,
    })
  };

  return <PostList data={DATA} onOpen={openPostHandler}/>
};

MainScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: 'My block',
  headerRight: (
    <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
      <Item
        title='Take photo1'
        iconName='ios-camera'
        onPress={() => navigation.push('Create')}
      />
    </HeaderButtons>
  ),
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