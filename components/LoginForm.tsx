import { StyleSheet, View, TextInput } from 'react-native'
import * as React from 'react'
import { useState } from 'react';

import Button from './Button'

const LoginForm = (props: { onSuccess?: () => void}): JSX.Element => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    return (
        <View>
            <TextInput
                style={ styles.loginForm }
                onChangeText={ text => setUsername(text) }
            />
            <TextInput
                style={ styles.loginForm }
                onChangeText={ text => setPassword(text) }
                secureTextEntry={ true }
            />
            <View style={ styles.buttonContainer }>
                <Button
                    style={ styles.button }
                    text="Sign Up"
                    onClick={ props.onSuccess } />
                <Button
                    style={ styles.button }
                    text="Login"
                    onClick={ props.onSuccess } />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    loginForm: {
      backgroundColor: '#fff',
      fontFamily: 'futura',
      width: 250,
      height: 30,
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: 5,
      marginBottom: 5,
      borderRadius: 10,
      paddingLeft: 10,
      paddingRight: 10,
    },
    button: {
        marginTop: 5,
        marginBottom: 5,
        marginRight: 25,
        marginLeft: 25,
        fontSize: 14,
        borderRadius: 5,
    },
    buttonContainer: {
        flexDirection: 'row',
    }
  })
  

export default LoginForm;