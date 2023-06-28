import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, Pressable } from 'react-native';
import React from 'react';
import { withSafeAreaInsets } from 'react-native-safe-area-context';


const getDataFromSurvey = () => {
    // Create the data payload to send
    const payload = {
      the_data,
    };

    // Make an HTTP POST request to the "ScreeningHistory" page's URL
    fetch('http://35.1.47.96:19000/screening-history', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
    return the_data
    .then((response) => {
      // Handle the response if needed
      console.log('Data sent to ScreeningHistory');
    })
    .catch((error) => {
      // Handle the error if any
      console.error('Error sending data to ScreeningHistory:', error);
    });

  }

const ScreeningHistory = ({navigation, route}) =>{    

   
    return (
        <View>
            <Text>History of Past Screenings</Text>
            <View style={styles.allbuttons}>
                <View style={styles.buttonstyle}>
                    <Text>{getDataFromSurvey}</Text>
                </View>
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