import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack, Slot } from 'expo-router'

const rootLayout = () => {
  // return <Slot/>
  return(
    <Stack>
      <Stack.Screen name='index' options={{headerShown: false}}/>
    </Stack>
  )
}

export default rootLayout