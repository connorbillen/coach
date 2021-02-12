import * as React from 'react'
import { StyleSheet, View, Text } from 'react-native'

import ProgressBar from '../../components/ProgressBar'

const MealsPage = (): JSX.Element => {

  return (
    <View style={ styles.container }>
      <View style={ styles.dateMacrosContainer }>
        <Text style={ styles.date }>feb 5, 2021</Text>
        <View style={ styles.macrosContainer }>
          <View style={ styles.macroContainer }>
            <Text style={ styles.macroLabel }>protein</Text>
            <ProgressBar progress={ 60 }/>
          </View>
          <View style={ styles.macroContainer }>
            <Text style={ styles.macroLabel }>carbs</Text>
            <ProgressBar progress={ 60 }/>
          </View>
          <View style={ styles.macroContainer }>
            <Text style={ styles.macroLabel }>fats</Text>
            <ProgressBar progress={ 60 }/>
          </View>
        </View>
      </View>

      <View style={ styles.mealsContainer }>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  date: {
    fontSize: 30,
    fontWeight: '800',
    fontFamily: 'futura',
    color: '#fff',
  },
  dateMacrosContainer: {
    marginLeft: 17,
    marginTop: 20,
    marginBottom: 13,
  },
  macroLabel: {
    fontSize: 30,
    fontFamily: 'futura',
    color: '#fff',
    marginTop: 0,
    marginBottom: 0,
    minWidth: 120,
  },
  macroContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  macrosContainer: {
    marginTop: 13,
  },
  mealsContainer: {
    backgroundColor: '#fff',
    height: '100%',
    borderRadius: 25,
  },
})

export default MealsPage
