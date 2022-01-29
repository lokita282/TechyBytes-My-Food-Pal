import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ChatBot from 'react-native-chatbot';
const steps = [
  {
    id: '0',
    message: 'Hello!Welcome to QuoteIT',
    trigger: '1',
  },
  {
    id: '1',
    user: true,
    trigger: 2,
  },
  {
    id: '2',
    message: 'Are you a 1. Client or 2. User?',
    trigger: 3,
  },
  {
    id: '3',
    options: [
      {value: '1', label: '1.Client', trigger: '4'},
      {value: '2', label: '2.User', trigger: '5'},
    ],
  },
  {
    id: '4',
    message:
      'Would you like to 1.Create an account? or 2.Login to your existing account?',
    trigger: 6,
  },
  {
    id: '6',
    options: [
      {value: '1', label: '1.Create', trigger: '7'},
      {value: '2', label: '2.Login', trigger: '8'},
    ],
  },
  {
    id: '5',
    message: 'Any help needed to browse in the market?',
    end: true,
  },
  {
    id: '7',
    message: 'Redirect to the following link to create account.',
    end: true,
  },
  {
    id: '8',
    message: 'Click here to Login.',
    end: true,
  },
];
const Chatbot = () => {
  return (
    <View style={styles.container}>
      <ChatBot
        botBubbleColor="#FB008B"
        optionBubbleColor="#FB008B"
        userBubbleColor="#FCC13F"
        steps={steps}
      />
    </View>
  );
};

export default Chatbot;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 15,
  },
});
