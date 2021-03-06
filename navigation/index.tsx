import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import * as React from 'react'
import { ColorSchemeName } from 'react-native'
import { Provider } from 'react-redux'

import NotFoundScreen from '../screens/NotFoundScreen'
import LandingPage from '../screens/LandingPage'
import Main from '../screens/Main'
import { RootStackParamList } from '../types'
import LinkingConfiguration from './LinkingConfiguration'
import store from '../state'

// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  )
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();
const Navigator = Stack.Navigator;
const Screen = Stack.Screen;

function RootNavigator() {
  return (
    <Provider store={ store }>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="LandingPage" component={ LandingPage } />
        <Screen name="Main" component={ Main } />
        <Screen name="NotFound" component={ NotFoundScreen } options={{ title: 'Oops!' }} />
      </Navigator>
    </Provider>
  )
}
