import * as React from 'react'
import { useState } from 'react'
import { StyleSheet } from 'react-native'
import { Provider } from 'react-redux'

import NavHeader from '../components/NavHeader'
import { View } from '../components/Themed'
import EditMealOverlay from './overlays/EditMeal'
import Popover from '../components/Popover'

import MealsPage from './subpages/Meals'
import TrainingPage from './subpages/Training'
import CoachPage from './subpages/Coach'

import store from '../state'

const Main = (): JSX.Element => {
  const [state, setState] = useState({
    active: 'meals',
    popover: true,
  })

  const tapOutCallback = (): void => {
    setState({
      active: state.active,
      popover: !state.popover,
    })
  }

  return (
    <Provider store={ store }>
      <View style={{ height: '100%' }}>
        <View style={ styles.container }>
          <NavHeader />
          { state.active === 'meals' && <MealsPage /> }
          { state.active === 'training' && <TrainingPage /> }
          { state.active === 'coach' && <CoachPage /> }
        </View>
        { state.popover && <Popover item={ EditMealOverlay } tapOutCallback={ tapOutCallback } /> }
      </View>
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    height: '100%',
  },
})

export default Main
