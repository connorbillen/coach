import * as React from 'react'
import { StyleSheet } from 'react-native'

import NavHeader from '../components/NavHeader'
import { View } from '../components/Themed'

import MealsPage from './subpages/Meals'
import TrainingPage from './subpages/Training'
import CoachPage from './subpages/Coach'

import EditMealOverlay from './overlays/EditMeal'
import Popover from '../components/Popover'

const Main = (): JSX.Element => {

  const state = {
    active: 'meals',
    popover: true,
  }

  return (
    <View style={{ height: '100%' }}>
      <View style={ styles.container }>
        <NavHeader />
        { state.active === 'meals' && <MealsPage /> }
        { state.active === 'training' && <TrainingPage /> }
        { state.active === 'coach' && <CoachPage /> }
      </View>
      { state.popover && <Popover item={ EditMealOverlay } /> }
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
