import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import 'react-native-gesture-handler';

import HomeScreen from './Screens/Home'
import LoginScreen from './Screens/Login'
import EmergencyScreen from './Screens/Emergency'
import MainScreen from './Screens/Main'
import SurveyIntermScreen from './Screens/SurveyInterm'
import SurveyScreen from './Screens/SurveyPages/SurveyQ1'
import SurveyQ2Screen from './Screens/SurveyPages/SurveyQ2'
import SurveyQ3Screen from './Screens/SurveyPages/SurveyQ3'
import SurveyQ4Screen from './Screens/SurveyPages/SurveyQ4'
import SurveyQ5Screen from './Screens/SurveyPages/SurveyQ5'
import SurveyQ6Screen from './Screens/SurveyPages/SurveyQ6'
import RecentlyUsed from './Screens/RecentlyUsed';
import Favorites from './Screens/Favorites';
import ScreeningHistory from './Screens/ScreeningHistory';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen 
          name="Login" 
          component={LoginScreen}
        />
        <Stack.Screen 
          name="Emergency" 
          component={EmergencyScreen} 
        />
        <Stack.Screen
          name="Main"
          component={MainScreen}
        />
        <Stack.Screen
          name="SurveyQ1"
          component={SurveyScreen}
        />
        <Stack.Screen
          name="SurveyInterm"
          component={SurveyIntermScreen}
        />
        <Stack.Screen
          name="SurveyQ2"
          component={SurveyQ2Screen}
        />
        <Stack.Screen
          name="SurveyQ3"
          component={SurveyQ3Screen}
        />
        <Stack.Screen
          name="SurveyQ4"
          component={SurveyQ4Screen}
        />
        <Stack.Screen
          name="SurveyQ5"
          component={SurveyQ5Screen}
        />
        <Stack.Screen
          name="SurveyQ6"
          component={SurveyQ6Screen}
        />
        <Stack.Screen
          name="RecentlyUsed"
          component={RecentlyUsed}
        />
        <Stack.Screen
          name="Favorites"
          component={Favorites}
        />
        <Stack.Screen
          name="ScreeningHistory"
          component={ScreeningHistory}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default MyStack



//DropDown menu and stuff
//https://www.npmjs.com/package/react-native-dropdown-select-list
