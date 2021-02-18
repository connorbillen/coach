import * as React from 'react'
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  SafeAreaView,
  ScrollView,
} from 'react-native'

const Popover = (props: { item: () => JSX.Element }): JSX.Element => {
  return (
    <View style={ styles.container }>
      <View style={ styles.popover }>
        <SafeAreaView>
          <ScrollView>
            <props.item />
          </ScrollView>
        </SafeAreaView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  popover: {
    backgroundColor: 'rgba(255, 255, 255, 1)',
    height: '50%',
    width: '70%',
    padding: 10,
    borderRadius: 15,
  }
})

export default Popover
