import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export const PostScreen = ({ navigation }) => {
  const postId = navigation.getParam('postId');

  return <View style={styles.center}>
    <Text>{postId}</Text>
  </View>
};

PostScreen.navigationOptions = ({ navigation }) => {
  const date = navigation.getParam('date');
  return {
    headerTitle: `Post ${new Date(date).toLocaleDateString()} `,
  }
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});