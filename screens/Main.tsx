import * as React from 'react'
import { StyleSheet } from 'react-native'

import { View } from '../components/Themed'
import NavHeader from '../components/NavHeader'
import MealsPage from '../screens/subpages/Meals'
import TrainingPage from '../screens/subpages/Training'
import CoachPage from '../screens/subpages/Coach'

const Main = (): JSX.Element => {

  const state = {
    active: 'meals'
  }



  return (
    <View style={ styles.container }>
      <NavHeader />
      { state.active === 'meals' && <MealsPage /> }
      { state.active === 'training' && <TrainingPage /> }
      { state.active === 'coach' && <CoachPage /> }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    height: '100%',
  },
})

export default Main
