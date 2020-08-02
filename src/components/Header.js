import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Flag from './Flag'

export default function Header(props) {
  return (
    <View style={styles.container}>
      <View style={styles.flagConatiner}>
        <TouchableOpacity onPress={props.onFlagPress} style={styles.flagButton}>
          <Flag bigger />
          <Text style={styles.flagsLeft}>={props.flagsLeft}</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.button} onPress={props.onNewGame}>
        <Text style={styles.buttonLabel}>New Game</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#EEE',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  flagContainer: {
    flexDirection: 'row',
  },
  flagButton: {
    marginTop: 5,
    minWidth: 30
  },
  flagsLeft: {
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 35,
    marginTop: -5
  },
  button: {
    backgroundColor: '#999',
    padding: 5,
    borderRadius: 10,
    padding: 20,
    borderWidth: 2
  },
  buttonLabel: {
    fontSize: 20,
    color: '#DDD',
    fontWeight: 'bold'
  }
})