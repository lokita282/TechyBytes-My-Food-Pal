import React, {useState} from 'react';
import {View, StyleSheet, Text, Button, TouchableOpacity} from 'react-native';
// import ButtonComponent from '../components/ButtonComponent.js';
// import {AuthContainer, useAuth} from '../../Auth';
import PasswordInputComponent from '../components/PasswordInputComponent.js';
import TextInputComponent from '../components/TextInputComponent.js';
import {AuthContainer, useAuth} from '../../Auth';
import LottieView from 'lottie-react-native';

function Loginpage({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = useAuth();
  const onLogin = (email, password) => auth.signIn(email, password);
  return (
    <View style={styles.container}>
      <LottieView
        source={require('../assets/girl.json')}
        autoPlay={true}
        loop
        style={styles.lottieview}
      />
      <TextInputComponent
        marginTop={60}
        iconShape="mail"
        placeholder="Email"
        autoComplete="email"
        value={email}
        onChangeText={text => {
          setEmail(text);
        }}
        placeholderTextColor="black"></TextInputComponent>
      <PasswordInputComponent
        placeholder="Password"
        autoComplete="password"
        value={password}
        onChangeText={text => {
          setPassword(text);
        }}
        placeholderTextColor="black"
      />
      <TouchableOpacity
        onPress={() => {
          onLogin(email, password);
        }}>
        <Text style={styles.textStyle}>Login</Text>
      </TouchableOpacity>
      {/* <TouchableOpacity onPress={() => navigation.navigate('SignUpPage')}>
            <Text style={styles.textStyle}>Signup</Text>
        </TouchableOpacity> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    color: 'black',
    marginTop: 25,
    fontSize:20,
  },
  lottieview: {
    height: 300,
  },
});

export default Loginpage;
