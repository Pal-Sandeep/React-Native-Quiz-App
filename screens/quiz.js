import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Quiz = (navigation) => {
  return (
    <View style={styles.container}>
        <View  style={styles.top}>
            <Text style={styles.question}>Imagine this   is cool</Text>
        </View>
        <View style={styles.options}>
            <TouchableOpacity style={styles.optionButtom}>
                <Text  style={styles.option}>Option  1 </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButtom}>
                <Text style={styles.option}>Option  2 </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButtom}>
            <Text style={styles.option}>Option  3 </Text>
                </TouchableOpacity>
            <TouchableOpacity style={styles.optionButtom}>
                <Text style={styles.option}>Option  4 </Text>
            </TouchableOpacity>

        </View>
        <View style={styles.bottom}>
            <TouchableOpacity style={styles.button}>
                <Text   style={styles.buttonText}>Skip</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('Result')} style={styles.button}>
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
    button: {
        backgroundColor: '#1A759F',
        padding: 12,
        paddingHorizontal: 16,
        borderRadius: 16,
        alignItems: 'center',
        marginBottom: 30,
      },
      buttonText: {
        fontSize: 18,
        fontWeight: '600',
        color: 'white',
      },
      question: {
        fontSize: 28,
      },
      option: {
        fontSize: 18,
        fontWeight: '500',
        color: 'white',
      },
      optionButtom: {
        paddingVertical: 12,
        marginVertical: 6,
        backgroundColor: '#34A0A4',
        paddingHorizontal: 12,
        borderRadius: 12,
      },
      parent: {
        height: '100%',
      },

})