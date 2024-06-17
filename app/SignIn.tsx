import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { Link } from 'expo-router'

const signUp = () => {
    // const[change, NoChange] = useState(false)
    // function changeColor(){
    //     NoChange(!change)
    // }

    // signin code for this app 
  return (
    <View style={myStyle.container}>
        <View style={myStyle.container}>
            <Image source={require('../assets/images/logo.png')} alt="" />
        </View>
        <View style={myStyle.header}>
            <Text style={myStyle.signUp}>Sign In</Text>
        </View>
        
        <View style={myStyle.inputSection}>
            <Text style={myStyle.username}>Email</Text>
            <TextInput  
            style ={myStyle.inputs}
            placeholder='Enter Your Email'
            placeholderTextColor='#7B7B8B'/>
        </View>
        <View style={myStyle.inputSection}>
            <Text style={myStyle.username}>Password</Text>
            <TextInput  
            style ={myStyle.inputs}
            placeholder='Enter Your Password'
            placeholderTextColor='#7B7B8B'/>
        </View>
        <TouchableOpacity style={myStyle.buttons}>
            <Text style={myStyle.signUpBtn}>Log In</Text>
        </TouchableOpacity>
        <Text style={myStyle.acct}>Don’t have an account? <Link style={{'color':'#FF8C00'}} href='/signUp'>Signup</Link></Text>
        
    </View>
  )
}

const myStyle = StyleSheet.create({
    container:{
        width: '100%',
        height:'100%',
        backgroundColor: 'black',
        color: 'white',
        display:'flex',
        // justifyContent:'center',
        alignItems:'center',
        gap:30
    },
    header:{
        width:'90%',
        backgroundColor:'black',
        marginTop: 50
    },
    signUp:{
        color:'white',
        fontSize: 24,
        fontWeight: 'bold'
    },
    inputSection:{
        width:'90%',
        display: 'flex',
        flexDirection:'column',
        gap:10
    },
    username:{
        color:'#CDCDE0',
        fontSize: 21,
    },
    inputs:{
        backgroundColor: '#1E1E2D',
        height:40,
        paddingLeft: 20,
        color:'white',
        borderRadius: 10
    },
    buttons:{
        width: '90%',
        height:50,
        backgroundColor:'#FF8C00',
        color:'black',
        borderRadius:10,
        display:'flex',
        justifyContent:'center',
        alignItems:'center'        
    },
    signUpBtn:{
        fontFamily:'arial',
        fontWeight: 'bold',
        fontSize:20
    },
    acct:{
        color:'white',
        fontSize:18
    }

    // logo:{
    //     width: '100%',
    //     backgroundColor: 'white'
    // }
})
export default signUp