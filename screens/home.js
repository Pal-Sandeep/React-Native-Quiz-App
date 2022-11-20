import {Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Title from '../components/title';

const home = () => {
  return (
    <View>
        <Title />
        <View style={styles.bannerContainer}>
            <Image source={{uri:'https://iconscout.com/contributors/vectormine'}}
                style={styles.banner}
                resizeMode="contain"
            />
            
        </View>
        <TouchableOpacity onPress={()=>navigation.navigate("Quiz")}>
            <Text>
                Start
            </Text>
        </TouchableOpacity>
    </View>
  )
}

export default home

const styles = StyleSheet.create({
    banner:{
        height:300,
        width:300,
    },
    bannerContainer:{
        justifyContent:'center',
        alignItems:'center',
    },
});