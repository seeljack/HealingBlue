import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import React, { useContext, useState, useEffect } from 'react';
import { withSafeAreaInsets } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FavoritesContext} from './Resource';
import { readData } from './Resource';


const Favorites = ({navigation}) =>{

    //retrieves the data
    readData();


    const [Resource, setResource] = useState([]);
    const { favorites } = useContext(FavoritesContext);


    return (
        <View>
            <Text>{favorites}</Text>
        </View>
    );
}




export default Favorites