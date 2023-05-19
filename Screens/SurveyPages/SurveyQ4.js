import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TextInput} from 'react-native';
import React from 'react';
import { SelectList } from 'react-native-dropdown-select-list'
import { MultipleSelectList } from 'react-native-dropdown-select-list'

const SurveyQ4 = ({navigation, route}) =>{
  const [categories, setCategories] = React.useState([]);
  let {the_data} = route.params;
  <View>
    <Text>Hello World</Text>
  </View>
  return(
    <View style={styles.container}>
      <Text style={styles.textQ1}>
        4 What school/college are you in?
            (Select all that apply) 
      </Text>
        <MultipleSelectList 
            setSelected={(val) => setCategories(val)} 
            data={Q4} 
            save="key"
            label="Categories"
            dropdownStyles={{backgroundColor: 'white'}}
            inputStyles={{color: 'white'}}
        />
      <View style={styles.filler}></View>
      <View style={styles.button1}>
           <Button
              title="Next"
              color="black"
              onPress={() => {
                the_data.push(categories);
                navigation.navigate('SurveyQ5',{the_data: the_data})
              }}
            />
      </View>
      <View style={{marginTop:50}}>
        <Text style={{color:'white'}}>Selected Categories : </Text>
        {
          categories.map((item) => {
            return(
              <Text key={item} style={{marginTop:10,color:'white'}}>{item}</Text>
            )
          })
        }
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
  },
})





const Q4 = [
  {key:'AU', value:'Architecture & Urban Planning'},
  {key:'AD', value:'Art & Design'},
  {key:'BS', value:'Business'},
  {key:'ED', value:'Education'},
  {key:'DE', value:'Dentistry'},
  {key:'EG', value:'Engineering'},
  {key:'ES', value:'Environment & Sustainability'},
  {key:'IN', value:'Information'},
  {key:'SW', value:'Social Work'},
  {key:'PP', value:'Public Policy'},
  {key:'PH', value:'Pharmacy'},
  {key:'NU', value:'Nursing'},
]


export default SurveyQ4