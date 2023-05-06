import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TextInput} from 'react-native';
import React from 'react';
import { SelectList } from 'react-native-dropdown-select-list'
import { MultipleSelectList } from 'react-native-dropdown-select-list'

const SurveyQ6 = ({navigation, route}) =>{
  const [categories, setCategories] = React.useState([]);
  let {the_data} = route.params;
  the_data.push(categories);
  return(
    <View style={styles.container}>
      <Text style={styles.textQ1}>
      6 Select your areas of concern
        (Select all that apply)
      </Text>
        <MultipleSelectList 
            setSelected={(val) => setCategories(val)} 
            data={Q6} 
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
              onPress={() => navigation.navigate('Hub', {the_data: the_data})}
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
      fontWeight: 'bold',
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





const Q6 = [
  {key:'DE', value:'Depression, Anxiety, PTSD, Stress'},
  {key:'FS', value:'Financial Stability & Assistance'},
  {key:'HL', value:'Home Life & Home Stability'},
  {key:'FS', value:'Food & Supply Insecurity'},
  {key:'CH', value:'Child or Elder Care Assistance'},
  {key:'DI', value:'Disability Support'},
  {key:'HW', value:'Health & Wellness'},
  {key:'DS', value:'Diversity, Equity & Inclusion Support'},
]


export default SurveyQ6