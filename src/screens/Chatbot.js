import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ChatBot from 'react-native-chatbot';
const steps = [
  {
    id: '0',
    message: 'Hello! Welcome to MyFoodPal',
    trigger: '1',
  },
  {
    id: '1',
    user: true,
    trigger: 2,
  },
  {
    id: '2',
    message: 'What would you like to know ?',
    trigger: 3,
  },
  {
    id: '3',
    options: [
      {value: '1', label: '1.Food nutrional value', trigger: '4'},
      {value: '2', label: '2.Daily Statistics', trigger: '5'},
      {value: '3', label: '3.Monthly Statistics', trigger: '6'},
    ],
  },
  {
    id: '4',
    message: 'Please navigate to Scanner section and know your food content.',
    trigger: 7,
  },
  {
    id: '5',
    message: 'Please navigate to Dashboard section to know your daily stats!!',
    trigger: 7,
  },
  {
    id: '6',
    message: 'Please navigate to Report section to compare your records..',
    trigger: 7,
  },
  {
    id: '7',
    message: 'Would you like to continue ?',
    trigger: 8,
  },
  {
    id: '8',
    options: [
      {value: '1', label: 'Yes', trigger: '9'},
      {value: '2', label: 'No', trigger: '10'},
    ],
  },
  {
    id: '9',
    message: 'Would you like to explore our Additional features ?',
    trigger: 11,
  },
  {
    id: '10',
    message: 'It was great helping you :-)',
    end: true,
  },
  {
    id: '11',
    options: [
      {value: '1', label: 'Yes', trigger: '12'},
      {value: '2', label: 'No', trigger:'10'},
    ],
  },
  {
    id: '12',
    message:
      'Our unique features are Map section suggesting healthy restaurants, and read daily blogs and quote of the day.',
    trigger:13,
  },
  {
    id: '13',
    options: [
      {value: '1', label: 'Explore Maps', trigger: '14'},
      {value: '2', label: 'Read Daily Blogs', trigger:'15'},
      {value: '2', label: 'Motivate me with quotes', trigger:'16'},
    ],
  },
  {
    id: '14',
    message: 'Please navigate to Maps section',
    trigger: 7,
  },
  {
    id: '15',
    message: 'Please navigate to Dashboard section',
    trigger: 7,
  },
  {
    id: '16',
    message: 'Please navigate to Report section',
    trigger: 7,
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