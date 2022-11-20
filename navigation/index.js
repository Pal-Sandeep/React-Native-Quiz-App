import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import home from '../screens/home';
import Quiz from '../screens/quiz';
import Result from '../screens/result';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={home} />
      <Stack.Screen name="Quiz" component={Quiz} />
      <Stack.Screen name="Result" component={Result} />
    </Stack.Navigator>
  );
}

export default MyStack;