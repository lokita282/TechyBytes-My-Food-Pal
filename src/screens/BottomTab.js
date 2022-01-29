import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MonthReport from './MonthReport';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
    return (
        <Tab.Navigator>
        <Tab.Screen name="MonthReport" component={MonthReport} />
        <Tab.Screen name="ChatBot" component={Chatbot} />
        <Tab.Screen name="Dashbaord" component={Dashboard} />
        <Tab.Screen name="Upload" component={Upload} />
      </Tab.Navigator>
      );
};

export default BottomTab;
