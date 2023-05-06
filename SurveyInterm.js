import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import React from 'react';
import { withSafeAreaInsets } from 'react-native-safe-area-context';

const SurveyInterm = ({navigation}) =>{
    const the_data = [];
    return (
        <View style={styles.container}>
            <Text style={styles.textQ1}>You will now begin a new screening</Text>
            <View style={styles.button1}>
                <Button
                    title="Continue"
                    color="black"
                    onPress={() => navigation.navigate('SurveyQ1')}
                />
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00274c',
        alignItems: 'center',
        justifyContent: 'center',
      },
    textQ1: {
      paddingBottom: 90,
      color: 'white',
      fontSize: 30,
      textAlign: 'center',

    },
    button1: {
        backgroundColor: 'white',
        borderRadius: 15,
        width: 100,
        height: 45,
    },
})


export default SurveyInterm