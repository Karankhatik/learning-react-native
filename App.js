import React, { Component } from 'react'
import { Alert, Button, StyleSheet, View } from 'react-native'

const App = () => {
  const _onPressButton = () => {
    //console.log('On Press called')
    Alert.alert('You tapped the button!')
    alert('You tapped the button!')
  }
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button onPress={_onPressButton} title="Press Me" />
      </View>
      <View style={styles.buttonContainer}>
        <Button onPress={_onPressButton} title="Press Me" color="#841584" />
      </View>
      <View style={styles.alternativeLayoutButtonContainer}>
        <Button onPress={_onPressButton} title="looks great!" />
        <Button onPress={_onPressButton} title="OK!" color="#841584" />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  buttonContainer: {
    margin: 20,
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
})

export default App
