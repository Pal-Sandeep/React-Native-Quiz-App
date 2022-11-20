import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Home from  './screens/home';
import Quiz from  './screens/quiz';
import Result from  './screens/result';
import MyStack from './navigation';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return (
    // <View style={styles.container}>
        <NavigationContainer>
            <MyStack/>
        </NavigationContainer>
        // {/* <Home/> */}
        // {/* <Quiz /> */}
        // <Result/>
    // </View>
  );
};

export default App

const styles = StyleSheet.create({
    container:{
        paddingTop:40,
        paddingHorizontal:16,
    },

});
