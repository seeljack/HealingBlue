import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, FlatList, Pressable, ImageBackground, TouchableHighlight, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import React, { useState, useEffect, createContext } from 'react';
import AsyncStorage  from '@react-native-async-storage/async-storage';



//This function is for debugging, it shows what is inside the Asyncstorage for favorites
const thefetchData = async () => {
  try {
    const data = await AsyncStorage.getItem('Favorite');
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
  const [viewOne, setViewOne] = useState(false);
  const [favorites, setFavorites] = useState([]);

  // AsyncStorage.clear();


  // This is for setting the star equal to its previous color
  useEffect(() => {
    //This function fetches the data from AsyncStorage
    const getfetchData = async () => {
      try {
        const data = await AsyncStorage.getItem(the_title);
        console.log("THE TITLE " + the_title + " " + data)
        if(data == 'true'){
          setViewOne(true)
          the_view();
        }
        else{
          setViewOne(false)
          the_view();
        }
      } catch (error) {
        console.log('Error fetching data:1', error);
      }
    };
    getfetchData();
    the_view();
  }, []);

//-----------THIS IS THE SECTION FOR SAVING THE DATA TO ASYNCSTORAGE -----------------------

  //Saving the data, this saves the data into the AsyncStorage, if data already exist, it adds data to favorites. if not it sets favorites to the data. If resource already exists it deletes it
  const saveData = async (data) => {
    try {
      const existingData = await AsyncStorage.getItem('Favorite');
      let deleteData = false;
      let index = 0;
      //This makes sure that if favorites but is empty it wont get executed
      can_execute = true;
      if ((existingData && existingData.length > 0)){
        const parsedData1 = JSON.parse(existingData);
        if(parsedData1.favorites){
          if(parsedData1.favorites.length == 0){
            can_execute = false
          }
        }
        if(can_execute){
          //TO SEE IF THE DATA IS ALREADY IN THE THE FAVORITES AND IF ITS IS DELTE IT
          const parsedData = JSON.parse(existingData);
          let length = parsedData.length;
          if(parsedData.favorites){
            length = parsedData.favorites.length;
            for(let i = 0; i < length; i+=5){
              if(parsedData.favorites[i] != undefined){
                if(parsedData.favorites[i] == data[0]){
                  deleteData = true;
                  index = i;
                  console.log("DATA IS THE SAME DELETE IT")
                }
              }
            }
          }
          for(let i = 0; i < length; i+=5){
            if(parsedData[i] != undefined){
              if(parsedData[i] == data[0]){
                deleteData = true;
                index = i;
                console.log("DATA IS THE SAME DELETE IT")
              }
            }
          }
          if(deleteData == false){
          if(parsedData.favorites){
            const updatedData = {
              favorites: [...parsedData.favorites, ...data],
            };
            await AsyncStorage.setItem('Favorite', JSON.stringify(updatedData));
            thefetchData()
            return;
          }
          else{
            const updatedData = {
              favorites: [...parsedData, ...data],
            };
            await AsyncStorage.setItem('Favorite', JSON.stringify(updatedData));
            thefetchData()
            return;
          }
          } 
          else if (deleteData == true){
              // Remove the index that was equal to the tittle, and then 5 after that too. Keeps executing need to make it stop after one time thats why change indexbool = false
              if(parsedData.favorites){
                parsedData.favorites.splice(index, index + 5);
                const updatedData = {
                  favorites: parsedData.favorites,
                };

                // Store the modified array back into AsyncStorage
                await AsyncStorage.setItem('Favorite', JSON.stringify(updatedData));
                setFavorites(parsedData.favorites); // Update the state with the modified favorites array
              }
              else{
                parsedData.splice(index, index + 5);
                const updatedData = {
                  favorites: parsedData,
                };

                // Store the modified array back into AsyncStorage
                await AsyncStorage.setItem('Favorite', JSON.stringify(updatedData));
                setFavorites(parsedData); // Update the state with the modified favorites array
              }

              console.log(' 5 favorites deleted successfully');
  
              thefetchData()
              return;
          }
        }
        else{
          const newData = {
            favorites: data,
          };
          await AsyncStorage.setItem('Favorite', JSON.stringify(data));
          thefetchData()
        }
      }
     else {
        const newData = {
          favorites: data,
        };
        await AsyncStorage.setItem('Favorite', JSON.stringify(data));
        thefetchData()
      }
      // alert('Data successfully saved');
    } catch (error) {
      alert('Failed to save the data to the storage');
      console.log(error)
    }
    // thefetchData();
  };




  //This is the function that calls saveData and saves it to asyncStorage
  const onSubmitEditing = (updatedFavorites) => {
    if (!updatedFavorites) return;
  
    saveData(updatedFavorites);
  };


  //-----------------------------------------------------------------------------------------


  //------THIS IS THE SECTION FOR UPDATING THE FAVORITES ARRAY, WHICH NEED WHEN UPDATING THE ASYNCSTORAGE, AND ALSO SWITCHING THE STAR ON AND OFF -----------

  //This is what gets called on the button to see what value the star is at already and then either call the addToFavorites, or removeFromFavorites
  const changeView = () => {
    tempView = !viewOne;
    setViewOne(tempView);
    if (tempView) {
      updatedfavorites = addToFavorites();
      //Save the color of the star in async storage so when come back to page star is same color
      console.log("FAVORITES " + the_title)
      AsyncStorage.setItem(the_title, 'true')
      thefetchData()
      onSubmitEditing(updatedfavorites)
    } else {
      let theupdatedfavorites;
      theupdatedfavorites = removeFromFavorites();
      //Save the color of the star in async storage so when come back to page star is same color
      AsyncStorage.setItem(the_title, 'false')
      onSubmitEditing(theupdatedfavorites)
    }

  };

  //This changes the View of the favorites, when you hit the star
  const the_view = () => {
    if(viewOne == true){
      return (
        <Image 
            source = {require('../assets/pictures/star_filled.png')}
            style = {styles.headerimg}
        />
      )
    }
    else{
      return (
        <Image 
            source = {require(`../assets/pictures/star_unfilled.png`)}
            style = {styles.headerimg}
        />
      )
    }
  }


  //When you hit the star this adds the resource to the favorites
  const addToFavorites = () => {
    const updatedFavorites = [...favorites, the_title, the_role, the_campus, the_email, the_description];
    setFavorites(updatedFavorites);
    return updatedFavorites;
  };

  //If you undo the star this deletes the resource from favorites
  const removeFromFavorites = () => {
    // setFavorites(favorites);
    // console.log("BEFORE REMOVE ")
    // thefetchData()
    const updatedFavorites = [...favorites, the_title, the_role, the_campus, the_email, the_description];
    setFavorites(updatedFavorites);
    // const index = favorites.indexOf(the_title);
    //   if (index !== -1) {
    //     favorites.splice(index, 5); // Remove 5 elements starting from the index
    //     updatedFavorites = [...favorites];
    //     setFavorites(updatedFavorites); // Update the state with the modified favorites array
    //     return updatedFavorites
    //   }
      return updatedFavorites;
    // console.log("AFTER REMOVE ")
    // thefetchData()
    };


//-------------------------------------------------------------------------------------------------------------------

  return (
      <View style={styles.container}>
        <Text>{favorites}</Text>
              <TouchableOpacity onPress={changeView}>
                  <ImageBackground>{the_view()}</ImageBackground>
                  {/* <Text>{onSubmitEditing({favorites})}</Text> */}
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