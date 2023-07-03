import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, Pressable } from 'react-native';
import React from 'react';
import { withSafeAreaInsets } from 'react-native-safe-area-context';
import {AsyncStorage} from 'react-native';





const ScreeningHistory = ({navigation, route}) =>{    
   
    return (
        <View>
            <Text>History of Past Screenings</Text>
            <View style={styles.allbuttons}>
                <View style={styles.buttonstyle}>
                    <Pressable onPress={() => navigation.navigate('Hub')}>
                            <Text>"PAST SCREENING, WILL SHOW DATE AND TIME OF SCREENING"</Text>
                    </Pressable>
                </View>
                <View style={styles.buttonstyle}>
                    <Pressable onPress={() => navigation.navigate('Hub')}>
                            <Text>"PAST SCREENING, WILL SHOW DATE AND TIME OF SCREENING"</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    allbuttons: {


    },
    buttonstyle: {
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 10,
        width: '75%',
        marginTop: 5,
        
      },

});


export default ScreeningHistory