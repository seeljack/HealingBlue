import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import React from 'react';

const Home = ({navigation}) =>{
  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <View style={styles.allimg}>
            <Image 
              source={require('../assets/pictures/um-Logo-Navy.png')}
            />
            <Image
              source={require('../assets/pictures/UmichLogo.png')}
              style={styles.umich_img}
            />
        </View>
        <View style={styles.alltxt}>
          <Text style={styles.textHeader}>HealingBlue</Text>
          <Text style={styles.subhead}>Mental Health & Wellness Resource App</Text>
          <StatusBar style="auto" />
        </View>
      </View>
      <View style={styles.buttons}>
        <View style={styles.buttonstyle}>
          <Button 
          title="Login" 
          color="black"
          onPress={()=> navigation.navigate('Login')}
          />
        </View>
        <View style={styles.buttonstyle2}>
          <Button 
          title="Urgent & Crisis Services" 
          color="white"
          onPress={()=> navigation.navigate('Emergency')}
          />
        </View>
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
  screen: {
    flex: 1,
    backgroundColor: '#00274c',
    alignItems: 'center',
    
  },
  textHeader: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 60,
    bottom: 10,
  },
  subhead: {
    color: 'white',
    fontSize: 20,
    bottom: 10,
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
  alltxt: {
    paddingBottom: 200,
    alignItems: 'center',
  },
  buttonstyle: {
    backgroundColor: 'white',
    color: 'black',
    borderRadius: 20,
    bottom: 150,
    paddingHorizontal: 50,
    paddingVertical: 20,  
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttonstyle2: {
    backgroundColor: '#9A3324',
    color: 'black',
    borderRadius: 20,
    bottom: 150,
    paddingHorizontal: 50,
    paddingVertical: 20,  
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 30,
  
  },
  buttons: {

  }
});




export default Home