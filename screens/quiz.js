import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Quiz = () => {
  return (
    <View style={styles.container}>
        <View  style={styles.top}>
            <Text>Imagine this   is cool</Text>
        </View>
        <View style={styles.options}>
            <TouchableOpacity>
                <Text>Option  1 </Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text>Option  2 </Text>
            </TouchableOpacity>
            <TouchableOpacity>
            <Text>Option  3 </Text>
                </TouchableOpacity>
            <TouchableOpacity>
                <Text>Option  4 </Text>
            </TouchableOpacity>

        </View>
        <View style={styles.bottom}>
            <TouchableOpacity>
                <Text>Skip</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text>Next</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text>End</Text>
            </TouchableOpacity>
            
        </View>
    </View>
  )
}

export default Quiz

const styles = StyleSheet.create({
    container:{
        padding:12,
        height:"100%"
    },
    top:{
        marginVertical:16,
    },
    options:{
        marginVertical:16,
        flex:1,
    },
    bottom:{
        marginBottom:12,
        paddingVertical:16,
        justifyContent:'space-between',
        flexDirection:'row',
    },

})