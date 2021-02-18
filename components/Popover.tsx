import * as React from 'react'
import {
  StyleSheet,
  View,
  Pressable,
} from 'react-native'

const Popover = (props: { item: () => JSX.Element, tapOutCallback?: () => void }): JSX.Element => {
  return (
    <View style={ styles.container }>
      <Pressable style={ styles.backdrop } onPressOut={ props.tapOutCallback }>
      </Pressable>
      <View style={ styles.popover }>
        <props.item />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backdrop: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    bottom: 0,
  },
  popover: {
    backgroundColor: 'rgba(255, 255, 255, 1)',
    height: '60%',
    width: '80%',
    padding: 10,
    borderRadius: 15,
  }
})

export default Popover
