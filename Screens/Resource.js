import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, FlatList, Pressable } from 'react-native';
import React from 'react';

const Resource = ({ navigation, route }) => {
  let { the_data, the_title, the_role } = route.params;
  return (
    <View>
      <Text>{the_data}</Text>
      <Text>{the_title}</Text>
      <Text>{the_role}</Text>
    </View>
  );
};

export default Resource;
