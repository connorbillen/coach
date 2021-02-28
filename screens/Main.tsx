import * as React from 'react'
import { Dispatch } from 'react'
import { Pressable, StyleSheet } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'

import NavHeader from '../components/NavHeader'
import { View } from '../components/Themed'
import MealsPage from './subpages/Meals'
import TrainingPage from './subpages/Training'
import CoachPage from './subpages/Coach'

import { State, App } from '../interfaces'
import { actions } from '../state'

const Main = (): JSX.Element => {
  const state: App = useSelector((state: State) => state.app)

  return (
    <View style={{ height: '100%', zIndex: 1, backgroundColor: 'rgba(0, 0, 0, 0)' }}>
      <View style={ styles.container }>
        <NavHeader />
        { state.active === 'meals' && <MealsPage /> }
        { state.active === 'training' && <TrainingPage /> }
        { state.active === 'coach' && <CoachPage /> }
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    height: '100%',
  },
  backdrop: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    bottom: 0,
  },
})

export default Main
