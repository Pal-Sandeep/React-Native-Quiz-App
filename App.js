import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Home from  './screens/home';
import Quiz from  './screens/quiz';
import Result from  './screens/result';

const App = () => {
  return (
    <View style={styles.container}>
        {/* <Home/> */}
        {/* <Quiz /> */}
        <Result/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
    container:{
        paddingTop:40,
        paddingHorizontal:16,
    },

});
