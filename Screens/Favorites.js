import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, FlatList, Pressable } from 'react-native';
import React, { useContext, useState, useEffect } from 'react';
import { withSafeAreaInsets } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Favorites = ({navigation}) =>{

    const [Resource, setResource] = useState([]);
    const [dataArray, setdataArray] = useState([]);
    
   //When the app restarts should be able to still read in the data that persisted. 
   //This gets called whenever favorites gets updated
   useEffect(() => {
    //This function fetches the data from AsyncStorage
    const getfetchData = async () => {
      try {
        const data = await AsyncStorage.getItem('Favorite');
        const parsedData = data ? JSON.parse(data) : [];
        console.log('AsyncStorage data:', parsedData);
        setResource(parsedData);
        getResources(parsedData)
      } catch (error) {
        console.log('Error fetching data:1', error);
      }
    };
    getfetchData();
  }, []);

  const printRole = (the_role) => {
    if(the_role == "STD"){
      return <Text>Students</Text>
    }
    else if(the_role == "STF"){
      return <Text>Staff</Text>
    }
    else if(the_role == "FFF"){
      return <Text>Faculty</Text>
    }
  }

  const printCampus = (the_campus) => {
    if(the_campus == "A"){
      return <Text>Ann Arbor</Text>
    }
    else if(the_campus == "M"){
      return <Text>Medical</Text>
    }
    else if(the_campus == "D"){
      return <Text>Dearborn</Text>
    }
    else if(the_campus == "F"){
      return <Text>Flint</Text>
    }
  }


  const Item = ({title, role, campus, email, description, img,}) => (
    <Pressable onPress={() => navigation.navigate('Resource',
    { 
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


    const getResources = (parsedData) => {
      console.log("THIS IS IN GETRESOURCES:", parsedData)
    
      const updatedArray = [];
      for (let i = 0; i < parsedData.favorites.length; i += 5) {
        const obj = {
          title: parsedData.favorites[i],
          role: parsedData.favorites[i + 1],
          campus: parsedData.favorites[i + 2],
          email: parsedData.favorites[i + 3],
          description: parsedData.favorites[i + 4],
        };
        updatedArray.push(obj);
        console.log("THIS IS THE OBJ title", obj.title);
        setdataArray(updatedArray);
      }
  }

    return (
      <View style={styles.container}>
      {console.log("THIS IS THE DATA ARRAY" + dataArray)}
      <View style={styles.list}>
        <FlatList
          data={dataArray}
          horizontal={true}
          renderItem={({ item }) => <Item {...item} />}
          keyExtractor={(item) => item.title}
        />
      </View>
    </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
    position: 'relative',
  },
  list: {
    alignSelf: 'center',
    paddingTop: 200,
  },
  item: {
    backgroundColor: 'transparent',
    marginVertical: 8,
    marginHorizontal: 16,
    height: 150,
    borderRadius: 15,
  },
  itemimg: {
    height: 180,
    width: 240,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
},
  itemtext: {
    textAlign: 'center',
    fontSize: '30',
  },

})

export default Favorites