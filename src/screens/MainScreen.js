import React from 'react';
import { View, StyleSheet, Text, Button, FlatList } from 'react-native';

import { DATA } from "../data";
import { Post } from "../components/Post";

export const MainScreen = ({ navigation }) => {
  const openPostHandler = post => {
    navigation.navigate('Post', { postId: post.id, date: post.date, })
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
  headerTitle: 'My block'
};

const styles = StyleSheet.create({
  center: {
    padding: 10,
  }
});