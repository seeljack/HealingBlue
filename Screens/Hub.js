import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, FlatList, Pressable } from 'react-native';
import React from 'react';
import { withSafeAreaInsets } from 'react-native-safe-area-context';
import data from '../JSON/data.json';
const Hub = ({navigation, route}) =>{
    let {the_data} = route.params;
    let user_campus = the_data[1];
    let user_role = the_data[2];
    let user_category = the_data[3];
    let user_school = the_data[4];
    let user_feeling = the_data[5];
    let user_concern = the_data[6];


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
      };
    }); 


    //Gets the number of schools in the resource looking at. 
    const get_size_school = (item) => {
      let count = 0;
      for(let i in item.school){
        count += 1;
      }
      return count / 2;
    }

    const get_size_feeling = (item) => {
      let count = 0;
      for(let i in item.feeling){
        count += 1;
      }
      return count / 2;
    }

    const get_size_concern = (item) => {
      let count = 0;
      for(let i in item.concern){
        count += 1;
      }
      return count / 2;
    }

    const checkSchool = (item, item_size) => {
      let item_array = [];
        for(let i = 0; i < item_size; i += 2){
          let schoolletter1 = String(item.school[i]);
          let schoolletter2 = String(item.school[i + 1]);
          let the_school = schoolletter1 + schoolletter2;
          item_array.push(the_school);
        }
        for(let i = 0; i < item_size / 2; i = i+1){
            for(let j = 0; j < user_school.length; j++){
              if(user_school[j] == item_array[i]){
                return true;
              }
            }
        }
        return false;
    }

    const checkFeeling = (item, item_size) => {
      let item_array = [];
        for(let i = 0; i < item_size; i += 2){
          let feelingletter1 = String(item.feeling[i]);
          let feelingletter2 = String(item.feeling[i + 1]);
          let the_feeling = feelingletter1 + feelingletter2;
          item_array.push(the_feeling);
        }
        for(let i = 0; i < item_size / 2; i = i+1){
            for(let j = 0; j < user_feeling.length; j++){
              if(user_feeling[j] == item_array[i]){
                return true;
              }
            }
        }
        return false;
    }

    const checkConcern = (item, item_size) => {
      let item_array = [];
        for(let i = 0; i < item_size; i += 2){
          let concernletter1 = String(item.concern[i]);
          let concernletter2 = String(item.concern[i + 1]);
          let the_concern = concernletter1 + concernletter2;
          item_array.push(the_concern);
        }
        for(let i = 0; i < item_size / 2; i = i+1){
            for(let j = 0; j < user_concern.length; j++){
              if(user_concern[j] == item_array[i]){
                return true;
              }
            }
        }
        return false;
    }

    const Item = ({title, role, img,}) => (
      <Pressable onPress={() => navigation.navigate('Resource',{ the_data: the_data, the_title: title, the_role: role})}>
        <View style={styles.item}>
          <Image 
            source = {require(`../assets/pictures/Resources/temp.png`)}
            style = {styles.itemimg}
          />
          <Text style={styles.itemtext}>{title}</Text>
        </View>
        </Pressable>
      );

    return (
        <View>
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
              <Text>{the_data}</Text>
                  <FlatList
                      horizontal={true}
                      data={DATA}
                      renderItem={({item}) => {
                        let school_size = get_size_school(item);
                        let feeling_size = get_size_feeling(item);
                        let concern_size = get_size_concern(item);
                        if((item.campus == user_campus) && (item.role == user_role) && (item.category == user_category) && (checkSchool(item, school_size)) && (checkFeeling(item,feeling_size)) && (checkConcern(item,concern_size))){
                          return <Item title={item.title} role={item.role}/>;
                        }
                        else{
                          return null;
                        }
                      }}
                      keyExtractor={(item) => item.id}
                  />
              </View>
              <View style = {styles.hlist2}>
                  <Text>{the_data}</Text>
                  <FlatList
                      horizontal={true}
                      data={DATA}
                      renderItem={({item}) => {
                      if(item.role == 'STD'){
                      return <Item title={item.title}/>;
                      }
                      else{
                        return null;
                      }
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


export default Hub

// https://reactnative.dev/docs/flatlist?language=javascript

//FOR API STUFF WITH GOOGLE SHEETS AND INTEGRATING IT WITH REACT
//https://medium.com/ibjects/simplest-approach-to-build-a-react-native-app-with-google-sheets-api-3f3f89a20079