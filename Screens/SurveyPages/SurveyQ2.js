import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TextInput} from 'react-native';
import React from 'react';
import { SelectList } from 'react-native-dropdown-select-list'

const SurveyQ2 = ({navigation}) =>{
  const [selected, setSelected] = React.useState("");
  <View>
    <Text>Hello World</Text>
  </View>
  return(
    <View style={styles.container}>
      <Text style={styles.textQ1}>
        2. Select your role at the University of Michigan
      </Text>
      <SelectList 
          setSelected={(val) => setSelected(val)} 
          color= 'white'
          data={Q2} 
          save="key"
          dropdownStyles={{backgroundColor: 'white'}}
          inputStyles={{color: 'white'}}
      />
      <View style={styles.filler}></View>
      <View style={styles.button1}>
           <Button
              title="Next"
              color="black"
              onPress={() => navigation.navigate('SurveyQ3')}
            />
      </View>
        <View style={{marginTop:50}}>
          <Text>Selected Value : </Text>
          <Text style={{marginTop:10,color:'gray'}}>{selected}</Text>
        </View>
    </View>
  );
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00274C',
        justifyContent: 'center',
        paddingBottom: 300,
    },
    textQ1: {
      textAlign: 'center',
      paddingBottom: 10,
      color: 'white',
      size: 30,
    },
    button1: {
      backgroundColor: 'white',
      borderRadius: 15,
      width: 100,
      height: 45,
      alignSelf: 'center',
  },
  filler: {
    height: 30,
  }
})





const Q2 = [
  {key:'STD', value:'Student', disabled:true},
  {key:'STF', value:'Staff'},
  {key:'FFF', value:'Faculty', disabled:true},
]


export default SurveyQ2