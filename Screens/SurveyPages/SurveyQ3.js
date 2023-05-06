import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TextInput} from 'react-native';
import React from 'react';
import { SelectList } from 'react-native-dropdown-select-list'

const SurveyQ3 = ({navigation, route}) =>{
  const [selected, setSelected] = React.useState("");
  let {the_data} = route.params;
  the_data.push(selected);
  <View>
    <Text>Hello World</Text>
  </View>
  return(
    <View style={styles.container}>
      <Text style={styles.textQ1}>
        3. Select your student category
      </Text>
      <SelectList 
          setSelected={(val) => setSelected(val)} 
          color= 'white'
          data={Q3} 
          save="key"
          dropdownStyles={{backgroundColor: 'white'}}
          inputStyles={{color: 'white'}}
      />
      <View style={styles.filler}></View>
      <View style={styles.button1}>
           <Button
              title="Next"
              color="black"
              onPress={() => navigation.navigate('SurveyQ4',{the_data: the_data})}
            />
      </View>
      <View style={{marginTop:50}}>
        <Text style={{color:'white'}}>Selected Value :</Text>
        <Text style={{marginTop:10,color:'white'}}>{selected}</Text>
        <Text style={{marginTop:10,color:'white'}}>{the_data}</Text>
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





const Q3 = [
  {key:'U', value:'Undergraduate'},
  {key:'G', value:'Graduate'},
  {key:'M', value:'Medical'},
]


export default SurveyQ3