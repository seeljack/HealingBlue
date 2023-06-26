import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, FlatList, Pressable } from 'react-native';
import React from 'react';

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
  return (
    <View>
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
    </View>
  );
};


const styles = StyleSheet.create({
  name: {
    fontSize: 32,
  },
  head: {
    paddingTop: 70,
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
    textAlign: 'center',
    paddingTop: 10,
  },
});

export default Resource;
