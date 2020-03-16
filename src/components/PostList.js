import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import { Post } from "./Post";

export const PostList = ({ data, onOpen }) => (
  <View style={styles.wrapper}>
    <FlatList
      data={data}
      keyExtractor={(post) => post.id.toString()}
      renderItem={({ item }) => <Post post={item} onOpen={onOpen}/>}
    />
  </View>
);

const styles = StyleSheet.create({
  center: {
    padding: 10,
  }
});