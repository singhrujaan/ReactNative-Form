import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'

const HomeComponent = ({route,navigation}) => {
  const {name} = route.params
  return (
    <View>
      <Text>welcome {name}</Text>
      <Button title='Go Back' onPress={()=>navigation.goBack()}/>
    </View>
  )
}

export default HomeComponent

const styles = StyleSheet.create({})