import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LandingPage from './screens/LandingPage';
import Dashboard from './screens/Dashboard';
import Upload from './screens/Upload';
import Chatbot from './screens/Chatbot';
import MonthReport from './screens/MonthReport';
import Map from './screens/Map';
import BottomTab from './screens/BottomTab';
import Splash from './screens/Splash';
import Profile from './screens/Profile';


const Stack = createStackNavigator();
function TabsNavigation() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Profile'>
        {/* <Stack.Screen name='LandingPage' component={LandingPage} options={{ headerShown: false }}> </Stack.Screen> */}
        <Stack.Screen name='Profile' component={Profile} options={{ headerShown: false }}/> 
        <Stack.Screen name='BottomTab' component={BottomTab} options={{ headerShown: false }}/> 
        <Stack.Screen name='Dashboard' component={Dashboard} options={{ headerShown: false }}/> 
        <Stack.Screen name='MonthReport' component={MonthReport} options={{ headerShown: false }}/> 
        <Stack.Screen name='Chatbot' component={Chatbot} options={{ headerShown: false }}/>
        <Stack.Screen name='Upload' component={Upload} options={{ headerShown: false }}/>
        <Stack.Screen name='Splash' component={Splash} options={{ headerShown: false }}/>
        <Stack.Screen name='Map' component={Map} options={{ headerShown: false }}/>
    
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default TabsNavigation