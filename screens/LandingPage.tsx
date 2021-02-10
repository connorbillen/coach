import * as React from 'react'
import { useState } from 'react'
import { StyleSheet } from 'react-native'

import { Text, View } from '../components/Themed'
import Button from '../components/Button'
import LoginForm from '../components/LoginForm'

export default function LandingPage() {
  const [enableLogin, setEnableLogin] = useState(false)

  const getStartedHandler: () => void = (): void => {
    setEnableLogin(true)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>coach</Text>
      <View style={styles.separator} />
      { !enableLogin && <Button text='Get Started' onClick={ getStartedHandler }/> }
      { enableLogin && <LoginForm /> }
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
