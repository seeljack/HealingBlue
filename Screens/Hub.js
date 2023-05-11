import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, FlatList, Pressable } from 'react-native';
import React from 'react';
import { withSafeAreaInsets } from 'react-native-safe-area-context';

const Hub = ({navigation, route}) =>{
    let {the_data} = route.params;

    const Item = ({title}) => (
        <View style={styles.item}>
          <Text style={styles.title}>{title}</Text>
        </View>
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
                      renderItem={({item}) => <Item title={item.title} />}
                      keyExtractor={(item) => item.id}
                  />
              </View>
              <View style = {styles.hlist2}>
                  <Text>{the_data}</Text>
                  <FlatList
                      horizontal={true}
                      data={DATA}
                      renderItem={({item}) => <Item title={item.title} />}
                      keyExtractor={(item) => item.id}
                  />
              </View>
            </View>
            <View style = {styles.footer}> 
              <View style = {styles.fourbuttons}>
                <View style = {styles.eachbuttonr1}>
                  <Pressable onPress={() => navigation.navigate('SurveyInterm')}>
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
                  <Pressable onPress={() => navigation.navigate('SurveyInterm')}>
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
                  <Pressable onPress={() => navigation.navigate('SurveyInterm')}>
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
                <Pressable onPress={() => navigation.navigate('SurveyInterm')}>
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
      paddingBottom: 125,
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
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
      },
    ltext: {
        textAlign: 'center',
        paddingBottom: 10,
        color: 'black',
        fontSize: 24,
        paddingTop: 20,
    },
    hlist: {
        paddingTop: 40,
    },
    hlist2: {
      paddingTop: 60,
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
    }
});

const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];


export default Hub

// https://reactnative.dev/docs/flatlist?language=javascript