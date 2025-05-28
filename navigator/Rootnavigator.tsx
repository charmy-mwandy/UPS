import {  Text, View } from 'react-native'
import React from 'react'
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tabnavigator from './Tabnavigator';

export type RootStackParamList = {
    Main: undefined;
}

const RootStack = createNativeStackNavigator();

const Rootnavigator = () => {
  return (
    <RootStack.Navigator>
        <RootStack.Group>
            <RootStack.Screen name= "Main" component={Tabnavigator}/>
        </RootStack.Group>
    </RootStack.Navigator>
  )
}

export default Rootnavigator