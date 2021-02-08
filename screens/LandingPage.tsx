import * as React from 'react'
import { useState } from 'react'
import { StyleSheet } from 'react-native'

import { Text, View } from '../components/Themed'
import Button from '../components/Button'

export default function LandingPage() {
  const [buttonTitle, setButtonTitle] = useState('Get Started')
  
  const getStartedHandler: () => void = (): void => {
    setButtonTitle(`${ buttonTitle } more`)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>coach</Text>
      <View style={styles.separator} />
      <Button text={ buttonTitle } onClick={ getStartedHandler }/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 78,
    fontFamily: 'futura',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  button: {
    backgroundColor: '#00f',
    color: '#fff',
  }
})
