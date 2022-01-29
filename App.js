// import React, { useEffect } from 'react'
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import Loginpage from './src/screens/Loginpage';
// import SignUpPage from './src/screens/SignUpPage';


// const Stack = createStackNavigator();
// function App() {

//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName='Loginpage'>
//         <Stack.Screen name='Loginpage' component={Loginpage} options={{ headerShown: false }}>
//         </Stack.Screen>
//         <Stack.Screen name='SignUpPage' component={SignUpPage} options={{ headerShown: false }}>
//         </Stack.Screen>
//       </Stack.Navigator>
//     </NavigationContainer>
//   )
// }

// export default App

import React from 'react';
import {AuthContainer, useAuth} from './Auth'
import LoginNavigation from './src/LoginNavigation';
import TabsNavigation from './src/TabsNavigation';

// The registration view
// const Registration = () => {
//   const auth = useAuth();
//   const onRegister = () => auth.register();

//   return <Button title={'Register'} onPress={onRegister} />;
// };

// The authenticated view
// const Authtenticated = () => <Text>Hello!</Text>;

const App = () => {
  return (
      <AuthContainer>
        {({authenticated}) => {
          return authenticated ? <TabsNavigation/> : <LoginNavigation/>;
        }}
      </AuthContainer>
  );
};


export default App;