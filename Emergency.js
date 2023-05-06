import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import React from 'react';
import { withSafeAreaInsets } from 'react-native-safe-area-context';

const Emergency = ({navigation}) =>{
    return (
        <View style = {styles.screen}> 
            <View style = {styles.topimg}>
                <Image 
                source = {require('../assets/pictures/um-Logo-Navy.png')}
                />
            </View>
            <View>
                <Text style = {styles.bigtext}> Urgent & Crisis Services</Text>
            </View>
            <View style = {styles.bubbles}>
                <Text style = {styles.bubblestext} >911</Text>
            </View>
            <View style = {styles.bubbles}>
                <Text style = {styles.bubblestext} >DPSS</Text>
            </View>
            <View style = {styles.bubbles}>
                <Text style = {styles.bubblestext} >Suicide Prevention Line</Text>
            </View>
            <View style = {styles.bubbles}>
                <Text style = {styles.bubblestext} >Psychiatric Emergency Service</Text>
            </View>
            <View style = {styles.bubbles}>
                <Text style = {styles.bubblestext} >National Crisis Text Line</Text>
            </View>
        </View>
        );
    }



    const styles = StyleSheet.create({
        screen: {
            flex: 1,
            backgroundColor: '#FF0000',
            alignItems: 'center',
          },
        topimg: {
            top: 30,
        },
        bigtext: {
            fontWeight: 'bold',
            fontSize: 30,
            color: 'white',
            top: 80,
        },
        bubbles: {
            top: 150,
            backgroundColor: 'white',
            borderRadius: 15,
            width: 300,
            height: 60,
            margin: 15,
        },
        bubblestext: {
            fontSize: 20,
            fontWeight: 'bold',
            textAlign: 'center',
            top: 15,
        }




    });

    export default Emergency