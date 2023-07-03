import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import React, { useContext, useState, useEffect } from 'react';
import { withSafeAreaInsets } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Favorites = ({navigation}) =>{

    const [Resource, setResource] = useState([]);
   //When the app restarts should be able to still read in the data that persisted. 
   //This gets called whenever favorites gets updated
   useEffect(() => {
    //This function fetches the data from AsyncStorage
    const getfetchData = async () => {
      try {
        const data = await AsyncStorage.getItem('Favorite');
        console.log('AsyncStorage data:', data);
        setResource(data);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };
    getfetchData();
  }, []);
    return (
        <View>
            <Text>{Resource}</Text>
        </View>
    );
}




export default Favorites