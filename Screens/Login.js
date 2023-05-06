import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import React from 'react';
import { withSafeAreaInsets } from 'react-native-safe-area-context';

const Login = ({navigation}) =>{
    return (
        <View style={styles.screen}>
             <View style={styles.allimg}>
                <Image 
                source = {require('../assets/pictures/um-Logo-Navy.png')}
                />
                <Image
                source={require('../assets/pictures/UmichLogo.png')}
                style={styles.umich_img}
                />
            </View>
            <View>
                <Text style={styles.bigtxt}>HealingBlue</Text>
            </View>
            <View>
                <Text style={styles.smalltxt}>Use the Sign in with Google button to enter your University of Michigan account information</Text>
            </View>
            <View style = {styles.button1}>
                <Button  
                 title = "Sign in with Google"
                 color="black"
                 onPress={()=> navigation.navigate('Main')}
                 />
            </View>
            <View>
                <Text style={styles.smalltxt2}>By continuing, you are indicating that you accept our Terms of Service and Privacy Policy. </Text>
            </View>
            <View style = {styles.button2}>
                <Button  
                    title = "EMERGENCY HELP"
                    color="white"
                    onPress={() => navigation.navigate('Emergency')}
                    />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
      flex: 1,
      backgroundColor: '#00274c',
      alignItems: 'center',
    },
    header: {
        top: 200,
        fontWeight: 'bold',
    },
    inner_text_header: {
        color: 'white',
    },
    umich_img: {
        width: 170,
        height: 170,
        alignItems: 'center',
        top: 30,
      },
      allimg: {
        paddingBottom: 150,
        top: 60,
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'space'
      },
      bigtxt: {
        fontSize: 30,
        color: 'white',
        bottom: 40,
      },
      smalltxt: {
        fontSize: 15,
        textAlign: 'center',
        color: 'white',
      },
      button1: {
        backgroundColor: 'white',
        top: 30,
        borderRadius: 15,
        fontSize: 30,
      },
      smalltxt2: {
        fontSize: 10,
        textAlign: 'center',
        color: 'white',
        top: 70,
      },
      button2: {
        top: 200,
        backgroundColor: 'red',
        borderRadius: 15,
        fontSize: 30,
      }

});

export default Login

