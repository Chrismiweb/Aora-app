import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const rootLayout = () => {
  return (
    <View>
      <Text style={styles.container} >hello world</Text>
      {/* this is how to link to other pages */}
      <Link href='/profile'>click here to go profile page</Link>
      <Link href='/signUp'>click here to go to signup</Link>
    </View>
  )
}

export default rootLayout

const styles = StyleSheet.create({
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'blue',
      color: 'white',
      height:100
     
    }
})