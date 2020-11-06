import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import GameScreen from '../screens/GameScreen';
import HomeScreen from '../screens/HomeScreen';

const Stack = createStackNavigator()

export default function Routes() {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name='Home' component={HomeScreen} />
            <Stack.Screen name='GameScreen' component={GameScreen} />
        </Stack.Navigator>
    )
}