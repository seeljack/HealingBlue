import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, FlatList, Pressable, ImageBackground, TouchableHighlight, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import React, { useState, useEffect, createContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';



//This function is for debugging, it shows what is inside the Asyncstorage for favorites
const thefetchData = async () => {
  try {
    const data = await AsyncStorage.getItem('Star');
    console.log('AsyncStorage data:', data);
    console.log('\n \n \n \n \n \n \n ');
  } catch (error) {
    console.log('Error fetching data:', error);
  }
};


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


const Resource = ({ navigation, route }) => {
  let { the_data, the_title, the_role, the_campus, the_email, the_description} = route.params;
  const [viewOne, setViewOne] = useState(true);
  const [favorites, setFavorites] = useState([]);

  // AsyncStorage.clear();


  // This is for setting the star equal to its previous color
  useEffect(() => {
    //This function fetches the data from AsyncStorage
    const getfetchData = async () => {
      try {
        const data = await AsyncStorage.getItem('Star');
        console.log("THE DAJRSNVOISNEOCIN" + data)
        if(data == 'false'){
          setViewOne(true)
        }
        else{
          setViewOne(false)
        }
      } catch (error) {
        console.log('Error fetching data:1', error);
      }
    };
    getfetchData();
  }, []);

//-----------THIS IS THE SECTION FOR SAVING THE DATA TO ASYNCSTORAGE -----------------------

  //Saving the data, this saves the data into the AsyncStorage, if data already exist, it adds data to favorites. if not it sets favorites to the data.
  const saveData = async (data) => {
    try {
      const existingData = await AsyncStorage.getItem('Favorite');
      dont_add = false;
      if (existingData) {
          //TO SEE IF THE DATA IS ALREADY IN THE THE FAVORITES AND IF ITS IS DONT ADD IT
          const parsedData = JSON.parse(existingData);
          for(let i = 0; i < existingData.length; i+=5){
            if(parsedData.favorites[i] != undefined){
              if(parsedData.favorites[i] == data.favorites[0]){
                dont_add = true;
                console.log("DATA IS THE SAME WONT ADD")
              }
            }
          }
          if(dont_add == false){
          const updatedData = {
            favorites: [...parsedData.favorites, ...data.favorites],
          };
          await AsyncStorage.setItem('Favorite', JSON.stringify(updatedData));
      } 
     } else {
        const newData = {
          favorites: data.favorites,
        };
        await AsyncStorage.setItem('Favorite', JSON.stringify(newData));
      }
      alert('Data successfully saved');
    } catch (e) {
      alert('Failed to save the data to the storage');
    }
    // thefetchData();
  };

  //This is the function that calls saveData and saves it to asyncStorage
  const onSubmitEditing = (favorites) => {
    if (!favorites) return;
  
    saveData(favorites);
  };

  //-----------------------------------------------------------------------------------------


  //------THIS IS THE SECTION FOR UPDATING THE FAVORITES ARRAY, WHICH NEED WHEN UPDATING THE ASYNCSTORAGE, AND ALSO SWITCHING THE STAR ON AND OFF -----------

  //This is what gets called on the button to see what value the star is at already and then either call the addToFavorites, or removeFromFavorites
  const changeView = () => {
    setViewOne(!viewOne);
    if (viewOne) {
      addToFavorites();
      //Save the color of the star in async storage so when come back to page star is same color
      AsyncStorage.setItem('Star', 'true')
      thefetchData()
    } else {
      removeFromFavorites();
      //Save the color of the star in async storage so when come back to page star is same color
      AsyncStorage.setItem('Star', 'false')
    }
  };

  //This changes the View of the favorites, when you hit the star
  const the_view = () => {
    if(viewOne == true){
      return (
        <Image 
            source = {require(`../assets/pictures/star_unfilled.png`)}
            style = {styles.headerimg}
        />
      )
    }
    else{
      return (
        <Image 
            source = {require(`../assets/pictures/star_filled.png`)}
            style = {styles.headerimg}
        />
      )
    }
  }


  //When you hit the star this adds the resource to the favorites
  const addToFavorites = () => {
      setFavorites([...favorites, the_title, the_role, the_campus, the_email, the_description]); // Add the resource to the favorites array
  };

  //If you undo the star this deletes the resource from favorites
  const removeFromFavorites = () => {
    const updatedFavorites = favorites.filter(
      (item) =>
        item[0] == the_title ||
        item[1] == the_role ||
        item[2] == the_campus ||
        item[3] == the_email ||
        item[4] == the_description
    );
    setFavorites(updatedFavorites);
};


//-------------------------------------------------------------------------------------------------------------------

  return (
      <View style={styles.container}>
       <Text>{onSubmitEditing({favorites})}</Text>
        <Text>{favorites}</Text>
              <TouchableOpacity onPress={changeView}>
                  <ImageBackground>{the_view()}</ImageBackground>
            </TouchableOpacity>
        <View style={styles.head}>
          <Text style={styles.name}>{the_title}</Text>
          <Image 
              source = {require(`../assets/pictures/Resources/temp.png`)}
              style = {styles.itemimg}
          />
        </View>
        <View style={styles.students}>
          <Image 
              source = {require(`../assets/pictures/personlogo.png`)}
              style = {styles.studentimg}
          />
          <Text>{printRole(the_role)}</Text>
        </View>
        <View style={styles.campus}>
          <Image 
              source = {require(`../assets/pictures/pinlogo.png`)}
              style = {styles.campusimg}
          />
          <Text>{printCampus(the_campus)}</Text>
        </View>
        <View style={styles.email}>
          <Image 
              source = {require(`../assets/pictures/emaillogo.png`)}
              style = {styles.emailimg}
          />
          <Text>{the_email}</Text>
        </View>
        <View style={styles.description}>
          <Image 
              source = {require(`../assets/pictures/infocirclelogo.png`)}
              style = {styles.emailimg}
          />
          <Text style={styles.descriptiontext}>{the_description}</Text>
        </View>
        <View style={styles.footer}>
          <View style={styles.button}>
            <Pressable onPress={() => navigation.navigate('RecentlyUsed')}>
                          <Text style={styles.buttontext}>{"Contact"}</Text>
            </Pressable>
          </View>
          <View style={styles.button}>
            <Pressable onPress={() => navigation.navigate('RecentlyUsed')}>
                          <Text style={styles.buttontext}>{"Learn More"}</Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.bottomfotter}>
          <View style={styles.bottombutton}>
              <Pressable onPress={() => navigation.navigate('RecentlyUsed')}>
                            <Text style={styles.buttontext}>{"Schedule Appointment"}</Text>
              </Pressable>
          </View>
        </View>
      </View>
  );
};


const styles = StyleSheet.create({
  header: {
    paddingTop: 5,
    height: 0,
  },
  headerimg: {
    width: 50,
    height: 50,
    alignSelf: 'flex-end',

  },
  name: {
    fontSize: 32,
  },
  head: {
    paddingTop: 7,
    paddingLeft: 60,
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemimg: {
    height: 120,
    width: 159,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    marginLeft: 110,
  },
  students: {
    paddingLeft: 30,
    paddingTop: 40,
    flexDirection: 'row',
    alignItems: 'center',
  },
  studentimg: {
    height: 25,
    width: 25,
    marginRight: 10,
  },
  campus: {
    paddingLeft: 30,
    paddingTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  campusimg: {
    height: 40,
    width: 20,
    marginRight: 9,
  },
  email: {
    paddingLeft: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  emailimg: {
    height: 40,
    width: 30,
    marginRight: 9,
  },
  description: {
    paddingLeft: 30,
    flexDirection: 'row',
    alignSelf: 'left',
    width: '80%'
  },
  descriptiontext: {
    textAlign: 'left',
    paddingTop: 10,
  },
  footer: {
    position: 'absolute',
    bottom: 120,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingRight: 25,
    
  },
  button: {
    width: 125,
    height: 50,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#FFCB05',
    backgroundColor: '#00274C',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 18,
  },
  buttontext: {
    color: 'white',
  },
  bottomfotter: {
    position: 'absolute',
    bottom: 50,
    alignSelf: 'center',
    paddingRight: 25,
  },
  bottombutton: {
    width: 200,
    height: 50,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#FFCB05',
    backgroundColor: '#00274C',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 18,
  },
  container: {
    flex: 1,
    height: '100%',
    position: 'relative',
  },
  buttontext2: {
    color: 'black',
  },
  button2: {
    width: 125,
    height: 50,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#FFCB05',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 18,
  },
});

export default Resource;
