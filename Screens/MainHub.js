import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, FlatList, Pressable, ImageBackground, TouchableHighlight, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import React, { useState, useEffect, createContext } from 'react';
import AsyncStorage  from '@react-native-async-storage/async-storage';
import data from '../JSON/data.json';

const MainHub = ({navigation}) =>{


  const Item = ({title, role, campus, email, description, img,}) => (
    <Pressable onPress={() => navigation.navigate('Resource',
    { the_data: 123, 
      the_title: title, 
      the_role: role, 
      the_campus: campus,
      the_email: email,
      the_description: description,
    })}>
      <View style={styles.item}>
        <Image 
          source = {require(`../assets/pictures/Resources/temp.png`)}
          style = {styles.itemimg}
        />
        <Text style={styles.itemtext}>{title}</Text>
      </View>
      </Pressable>
    );


    const DATA = data.values.slice(1).map(row => {
      return {
        id: row[0],
        title: row[1],
        img: row[2],
        campus: row[3],
        role: row[4],
        category: row[5],
        school: row[6],
        feeling: row[7],
        concern: row[8],
        email: row[9],
        description: row[10],
      };
    }); 


  return (
      <View style={styles.container}>
        <View style = {styles.notfooter}>
            <View style = {styles.header}> 
                <Image 
                    source = {require('../assets/pictures/um-Logo-White.png')}
                    style = {styles.headerimg}
                />
            </View>
            <View>
              <Text style = {styles.ltext}>
                We think these resources might be helpful
              </Text>
            </View>
            <View style = {styles.hlist}>
                <FlatList
                    horizontal={true}
                    data={DATA}
                    renderItem={({item}) => {
                        return <Item title={item.title} role={item.role} campus={item.campus} email={item.email} description={item.description}/>;
                    }}
                    keyExtractor={(item) => item.id}
                />
            </View>
            <View style = {styles.hlist2}>
                <FlatList
                    horizontal={true}
                    data={DATA}
                    renderItem={({item}) => {
                       return <Item title={item.title} role={item.role} campus={item.campus} email={item.email} description={item.description}/>;
                  }}
                    keyExtractor={(item) => item.id}
                />
            </View>
          </View>
          <View style = {styles.footer}> 
            <View style = {styles.fourbuttons}>
              <View style = {styles.eachbuttonr1}>
                <Pressable onPress={() => navigation.navigate('SurveyQ1')}>
                  <View style = {styles.buttonimg}>
                      <Image 
                        source = {require('../assets/pictures/pencil.png')}
                        style = {styles.footerbuttonimg}
                      />
                      <Text style={styles.footerbuttontext}>{"Edit Location"}</Text>
                  </View>
                </Pressable>
              </View>
              <View style = {styles.eachbuttonr1}>
                <Pressable onPress={() => navigation.navigate('SurveyQ2')}>
                  <View style = {styles.buttonimg}>
                        <Image 
                          source = {require('../assets/pictures/pencil.png')}
                          style = {styles.footerbuttonimg}
                        />
                        <Text style={styles.footerbuttonforrole}>{"Edit Role"}</Text>
                    </View>
                </Pressable>
              </View>
              <View style = {styles.eachbuttonr2}>
                <Pressable onPress={() => navigation.navigate('SurveyQ5')}>
                  <View style = {styles.buttonimg}>
                        <Image 
                          source = {require('../assets/pictures/pencil.png')}
                          style = {styles.footerbuttonimg}
                        />
                        <Text style={styles.footerbuttontext}>{"Edit Feelings"}</Text>
                    </View>
                </Pressable>
              </View>
              <View style = {styles.eachbuttonr2}>
              <Pressable onPress={() => navigation.navigate('SurveyQ6')}>
                <View style = {styles.buttonimg}>
                        <Image 
                          source = {require('../assets/pictures/pencil.png')}
                          style = {styles.footerbuttonimg}
                        />
                        <Text style={styles.footerbuttontext}>{"Edit Concerns"}</Text>
                    </View>
              </Pressable>
              </View>
            </View>
            <View style = {styles.emergencybutton}>
                <Button  
                    title = "EMERGENCY HELP"
                    color="white"
                    onPress={() => navigation.navigate('Emergency')}
                    />
            </View>
          </View>
      </View>
  );
}


const styles = StyleSheet.create({
container: {
  flex: 1,
  height: '100%',
  position: 'relative',
},
  notfooter: {
    paddingBottom: 22,
  },
  headerimg: {
      left: 60,
      top: 40,
  },
  header: {
      width: '100%',
      height: 100,
      transform: [{ scale: 0.55 }],
      resizeMode: 'cover',
      bottom: 30,
      right: 65,
  },
  item: {
      backgroundColor: 'transparent',
      padding: 10,
      marginVertical: 8,
      marginHorizontal: 16,
      height: 150,
      borderRadius: 15,
    },
  itemimg: {
      height: 90,
      width: 120,
      borderTopRightRadius: 15,
      borderTopLeftRadius: 15,
  },
  itemtext: {
    textAlign: 'center',
  },
  ltext: {
      textAlign: 'center',
      paddingBottom: 10,
      color: 'black',
      fontSize: 24,
      paddingTop: 20,
  },
  hlist: {
      paddingTop: 0,
  },
  hlist2: {
    paddingTop: 20,
},
  footer: {
    backgroundColor: '#00274C',
    height: 500,
    paddingTop: 10,
  },
  emergencybutton: {
    backgroundColor: 'red',
    borderRadius: 15,
    fontSize: 30,
    width: 290,
    left: 50,
    bottom: 15,
  },
  fourbuttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  eachbuttonr1: {
    backgroundColor: 'white',
    width: 150,
    borderRadius: 15,
  },
  eachbuttonr2: {
    marginTop: 20,
    width: 150,
    backgroundColor: 'white',
    borderRadius: 15,
  },
  footerbuttontext: {
    color: 'black',
    fontSize: 16,
    textAlign: 'center',
  },
  footerbuttonforrole: {
    color: 'black',
    fontSize: 16,
    textAlign: 'center',
    paddingLeft: 20,
  },
  buttonimg: {
    flexDirection: 'row',
  },
  footerbuttonimg: {
    width: 30,
    height: 20,
    marginBottom: 5,
  },
});


export default MainHub

// https://reactnative.dev/docs/flatlist?language=javascript

//FOR API STUFF WITH GOOGLE SHEETS AND INTEGRATING IT WITH REACT
//https://medium.com/ibjects/simplest-approach-to-build-a-react-native-app-with-google-sheets-api-3f3f89a20079