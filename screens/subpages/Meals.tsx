import { FontAwesome } from '@expo/vector-icons';
import * as React from 'react'
import { Dispatch } from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';

import { MealItem, Menu, State } from '../../interfaces'
import { actions } from '../../state'
import ProgressBar from '../../components/ProgressBar'

const MealsPage = (): JSX.Element => {
  const meals: { [k: string]: Menu } = useSelector((state: State) => state.menus)
  const dispatch: Dispatch<any> = useDispatch()

  const toggleMenu = (title: string): void => {
    dispatch({ type: actions.TOGGLE_MENU, data: { title } })
  }
  
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
        { Object.keys(meals).map((mealTitle: string, index: number): JSX.Element => {
          const meal = meals[mealTitle]

          return (
            <View key={ index } style={ styles.meal }>
              <View style={ styles.mealHeader }>
                <FontAwesome name='edit' style={ styles.mealHeaderEdit }/>
                <Text style={ styles.mealTitle }>{ mealTitle }</Text>
                <Pressable onPress={ (): void => { toggleMenu(mealTitle) } }>
                  <FontAwesome name={ meal.open ? 'chevron-down' : 'chevron-right' } style={ styles.mealHeaderChevron }/>
                </Pressable>
              </View>
              { meal.open && meal.meal && meal.meal.items &&
                <View style={ styles.mealInfo }>
                  { meal.meal.items.map((mealItem: MealItem, index: number): JSX.Element => {
                    return (
                        <View key={ index } style={ styles.mealItem }>
                          <View style={ styles.mealItemQuantityUnit }>
                            <Text style={ styles.mealItemQuantity }>
                              { mealItem.quantity * mealItem.servingSize }
                            </Text>
                            <Text style={ styles.mealItemUnit }>
                              { mealItem.servingUnit }
                            </Text>
                          </View>
                          <Text style={ styles.mealItemTitle }>
                            { mealItem.title }
                          </Text>
                        </View>
                    )
                  })}

                  <View style={ styles.mealMacrosContainer }>
                    <View style={ styles.mealMacroContainer }>
                      <Text style={ styles.mealMacroLabel }>protein</Text>
                      <ProgressBar progress={ 60 } add={ 30 } />
                    </View>
                    <View style={ styles.mealMacroContainer }>
                      <Text style={ styles.mealMacroLabel }>carbs</Text>
                      <ProgressBar progress={ 60 }/>
                    </View>
                    <View style={ styles.mealMacroContainer }>
                      <Text style={ styles.mealMacroLabel }>fats</Text>
                      <ProgressBar progress={ 60 }/>
                    </View>
                  </View>
                </View> }
            </View>
          )
        }) }
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
    marginRight: 17,
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
  meal: {
    marginTop: 20,
    marginRight:  15,
  },
  mealsContainer: {
    backgroundColor: '#fff',
    height: '100%',
    borderRadius: 25,
    paddingTop: 3,
    paddingLeft: 16,
    paddingRight: 16,
  },
  mealHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  mealInfo: {
    marginLeft: 12,
    marginTop: 7,
  },
  mealTitle: {
    fontFamily: 'futura',
    fontSize: 30,
    marginLeft: 10,
    marginRight: 10,
  },
  mealHeaderChevron: {
    fontSize: 20,
  },
  mealHeaderEdit: {
    fontSize: 30,
  },
  mealItem: {
    flexDirection: 'row',
  },
  mealItemQuantity: {
    fontSize: 18,
    fontFamily: 'futura',
  },
  mealItemQuantityUnit: {
    flexDirection: 'row',
    minWidth: 55,
  },
  mealItemTitle: {
    fontSize: 18,
    fontFamily: 'futura',
  },
  mealItemUnit: {
    fontSize: 18,
    fontFamily: 'futura',
  },
  mealMacrosContainer: {
  },
  mealMacroContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  mealMacroLabel: {
    fontSize: 18,
    fontFamily: 'futura',
    color: '#000',
    marginTop: 0,
    marginBottom: 0,
    minWidth: 80,
  },
})

export default MealsPage
