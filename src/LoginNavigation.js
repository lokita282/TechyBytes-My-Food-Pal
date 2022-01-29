import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Loginpage from './screens/Loginpage.js'
import SignUpPage from './screens/SignUpPage.js';


const Stack = createStackNavigator();
function LoginNavigation() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Loginpage'>
        <Stack.Screen name='Loginpage' component={Loginpage} options={{ headerShown: false }}>
        </Stack.Screen>
        <Stack.Screen name='SignUpPage' component={SignUpPage} options={{ headerShown: false }}>
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default LoginNavigation