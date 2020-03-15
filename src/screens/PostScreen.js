import React from 'react';
import { View, StyleSheet, Text, Image, Button, ScrollView, Alert } from 'react-native';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { DATA } from "../data";
import { THEME } from "../theme";
import { AppHeaderIcon } from "../components/AppHeaderIcon";

export const PostScreen = ({ navigation }) => {
  const postId = navigation.getParam('postId');
  const post = DATA.find(p => p.id === postId);
  const removeHandler = () => {
    Alert.alert(
      'Delete post',
      'Are you sure ?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: () => console.log('OK Pressed')},
      ],

      {cancelable: false},
    );
  };

  return (
    <ScrollView>
      <Image source={{ uri: post.img }} style={styles.img}/>
      <View style={styles.textWrap}>
        <Text style={styles.title}>{post.text}</Text>
      </View>
      <Button
        title='delete'
        color={THEME.DANGER_COLOR}
        onPress={removeHandler}
      />
    </ScrollView>
  )
};

PostScreen.navigationOptions = ({ navigation }) => {
  const date = navigation.getParam('date');
  const booked = navigation.getParam('booked');
  const iconName =  booked ? 'ios-star' : 'ios-star-outline';

  return {
    headerTitle: `Post ${new Date(date).toLocaleDateString()} `,
    headerRight: (
      <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
        <Item
          title='Take photo1'
          iconName={iconName}
          onPress={() => console.log('press photo 1')}
        />
      </HeaderButtons>
    ),
  }
};

const styles = StyleSheet.create({
  img:{
    width: '100%',
    height: 200
  },
  textWrap: {
    padding: 10,
  },
  title: {
    fontFamily: 'open-regular'
  }
});