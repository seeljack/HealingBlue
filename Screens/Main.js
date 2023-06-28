import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, Pressable } from 'react-native';
import React from 'react';
import { withSafeAreaInsets } from 'react-native-safe-area-context';

const Main = ({navigation}) =>{
    return (
        <View style = {styles.screen}>
            <View style = {styles.header}> 
                <Image 
                    source = {require('../assets/pictures/um-Logo-White.png')}
                    style = {styles.headerimg}
                />
            </View>
            <View style = {styles.dashboard}>
                <Text style = {styles.dashtext}> Dashboard</Text>
            </View>
            <View style = {styles.bubbles1}>
                {/* This IS how to do a button and style it!!!!!!!!! Below */}
                <Pressable onPress={() => navigation.navigate('SurveyInterm')}>
                    <Text style={styles.buttontext1}>{"New Screening"}</Text>
                </Pressable>
            </View>
            <View style = {styles.bubbles}>
                <Pressable onPress={() => navigation.navigate('RecentlyUsed')}>
                    <Text style={styles.bubblestext}>{"Recently Used"}</Text>
                </Pressable>
            </View>
            <View style = {styles.bubbles}>
                <Pressable onPress={() => navigation.navigate('Favorites')}>
                    <Text style={styles.bubblestext}>{"Favorites"}</Text>
                </Pressable>
            </View>
            <View style = {styles.bubbles}>
                <Pressable onPress={() => navigation.navigate('ScreeningHistory')}>
                    <Text style={styles.bubblestext}>{"Screening History"}</Text>
                </Pressable>
            </View>
            <View style = {styles.footer}>
                <View style = {styles.EmergencyButton}>
                    <Button  
                        title = "EMERGENCY HELP"
                        color="white"
                        onPress={() => navigation.navigate('Emergency')}
                    />
                </View>
            </View>

        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        alignItems: 'center',
      },
    header: {
        width: '100%',
        height: 100,
        transform: [{ scale: 0.55 }],
        resizeMode: 'cover',
        bottom: 30,
        right: 65,
    },
    headerimg: {
        left: 60,
        top: 40,
    },
    dashboard: {
        backgroundColor: '#00274C',
        width: 400,
        height: 84, 
    },
    dashtext: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 30,
        left: 115,
        top: 20,
    },
    bubbles1: {
        top: 20,
        backgroundColor: 'purple',
        borderRadius: 15,
        width: 300,
        height: 90,
        margin: 15,
        
        
    },
    bubblestext1: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        top: 30,
        color: 'white',
    },
    bubbles: {
        top: 20,
        backgroundColor: 'white',
        borderRadius: 15,
        width: 300,
        height: 90,
        margin: 15,
    },
    bubblestext: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        top: 30,
    },
    footer: {
        top: 40,
        width: 375,
        height: 100,
        borderRadius: 15,
        backgroundColor: "red",
    },
    EmergencyButton: {
        backgroundColor: 'red',
        borderRadius: 15,
    },
    ButtonText: {
        color: 'white',
    },

    buttontext1: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        top: 30,
    }



});

export default Main