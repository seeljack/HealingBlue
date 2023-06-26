import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, FlatList, Pressable } from 'react-native';
import React from 'react';

const Resource = ({ navigation, route }) => {
  let { the_data, the_title, the_role } = route.params;
  return (
    <View>
      <View style={styles.head}>
        <Text style={styles.name}>{the_title}</Text>
        <Image 
            source = {require(`../assets/pictures/Resources/temp.png`)}
            style = {styles.itemimg}
        />
      </View>
      <Text>{the_role}</Text>
    </View>
  );
};


const styles = StyleSheet.create({
  name: {
    fontSize: 32,
  },
  head: {
    paddingTop: 70,
    paddingLeft: 60,
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemimg: {
    height: 120,
    width: 159,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    marginLeft: 110,
  }
});

export default Resource;
