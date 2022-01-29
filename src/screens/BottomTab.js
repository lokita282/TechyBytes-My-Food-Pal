import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MonthReport from './MonthReport';
import Chatbot from './Chatbot';
import Upload from './Upload';
import Dashboard from './Dashboard';
import Map from './Map';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Dashbaord"
        component={Dashboard}
        options={{
          headerShown:false,
          tabBarLabel: 'Dashboard',
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="monitor-dashboard"
              color="black"
              size={25}
            />
          ),
        }}
        // options={{headerShown: false}}
      />
      <Tab.Screen
        name="Upload"
        component={Upload}
        options={{
          headerShown:false,
          tabBarLabel: 'Scanner',
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="image-search-outline"
              color="black"
              size={25}
            />
          ),
        }}
      />
      <Tab.Screen
        name="MonthReport"
        component={MonthReport}
        options={{
          headerShown:false,
          tabBarLabel: 'Report',
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="note-text-outline"
              color="black"
              size={25}
            />
          ),
        }}
      />
      <Tab.Screen
        name="ChatBot"
        component={Chatbot}
        options={{
          headerShown:false,
          tabBarLabel: 'ChatBot',
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="wechat"
              color="black"
              size={25}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Maps"
        component={Map}
        options={{
          headerShown:false,
          tabBarLabel: 'Maps',
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="map-marker-radius-outline"
              color="black"
              size={25}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
