import { StyleSheet, View, Text, Pressable } from 'react-native'

import * as React from 'react'
import { useState } from 'react';

const Button = (props: { onClick?: () => void, text: string }): JSX.Element => {
    const [pressed, setPressed] = useState(false);
    
    const styleOnPressIn: () => void = (): void => { 
        setPressed(true)
    }

    const styleOnPressOut: () => void = (): void => {
        setPressed(false)
    }
    
    const style = {
        ...styles.button,
      backgroundColor: !pressed ? '#fff' : '#ccc',
    }

    return (
        <View style={ style }>
            <Pressable
                onPressIn={ styleOnPressIn }
                onPressOut={ (): void => { styleOnPressOut(); if (props.onClick) props.onClick(); }}
            >
                <Text style={ style } suppressHighlighting={ true } >{ props.text }</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
      color: '#000',
      marginTop: 22,
      marginBottom: 22,
      marginLeft: 55,
      marginRight: 55,
      borderRadius: 20,
      fontSize: 18,
      fontFamily: 'futura',
    }
  })
  

export default Button;