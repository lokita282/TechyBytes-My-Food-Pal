import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MonthReport from './MonthReport';
import Chatbot from './Chatbot';
import Upload from './Upload';
import Dashboard from './Dashboard';


const Tab = createBottomTabNavigator();

const BottomTab = () => {
    return (
        <Tab.Navigator>
        <Tab.Screen name="Dashbaord" component={Dashboard} options={{ headerShown: false }}/>
        <Tab.Screen name="Upload" component={Upload} options={{ headerShown: false }} />
        <Tab.Screen name="MonthReport" component={MonthReport} options={{ headerShown: false }} />
        <Tab.Screen name="ChatBot" component={Chatbot} options={{ headerShown: false }}/>
        
      </Tab.Navigator>
      );
};

export default BottomTab;
