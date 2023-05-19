import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, FlatList, Pressable } from 'react-native';
import React from 'react';
import { withSafeAreaInsets } from 'react-native-safe-area-context';
import data from '../JSON/data.json';


const Resource = ({navigation, route}) =>{
    let {the_data} = route.params;
    return (
        <View>
            <Text>{the_data}</Text>
        </View>








    )
};









export default Resource