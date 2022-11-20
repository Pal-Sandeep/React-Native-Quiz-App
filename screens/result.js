import {Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const  Result = ({navigation}) => {
  return (
    <View>
        <View>
            <Text>  Result</Text>
        </View>
        <View style={styles.bannerContainer}>
        <Image source={{uri:'https://www.freepik.com/free-vector/did-you-know-3d-text-yellow-background_26782900.htm#query=quiz&position=6&from_view=keyword'}}
                style={styles.banner}
                resizeMode="contain"
            />
             <Image source={{uri:'C:\Users\JaanlevaDushman\Downloads\vecteezy_fill-in-test\Project_74-21.jpg'}}
                style={styles.banner}
                resizeMode="contain"
            />
        </View>
        <View>  
            <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
                <Text>Home</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default  Result

const styles = StyleSheet.create({
    banner:{
        height:300,
        width:300,
    },
    bannerContainer:{
        justifyContent:'center',
        alignItems:'center',
    },
})