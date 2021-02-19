import { FontAwesome } from '@expo/vector-icons'
import * as React from 'react'
import {
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native'

import Button from '../../components/Button'
import ProgressBar from '../../components/ProgressBar'

const EditMealOverlay = (): JSX.Element => {
    return (
        <View style={ styles.container }>
            <View style={ styles.contentContainer }>
                <View>
                    <View style={ styles.macroContainer }>
                        <Text style={ styles.macroLabel }>protein</Text>
                        <ProgressBar progress={ 60 } />
                    </View>
                    <View style={ styles.macroContainer }>
                        <Text style={ styles.macroLabel }>carbs</Text>
                        <ProgressBar progress={ 60 } />
                    </View>
                    <View style={ styles.macroContainer }>
                        <Text style={ styles.macroLabel }>fats</Text>
                        <ProgressBar progress={ 60 } />
                    </View>
                </View>

                <ScrollView style={ styles.mealInputContainer }>
                    { '...'.split('.').map((_, index: number): JSX.Element => {
                        return (
                            <View key={ index } style={ styles.ingredientInputContainer }> 
                                <TextInput 
                                    style={ styles.mealQuantityInput}
                                    onChangeText={ (): void => {} }
                                    value={ "2" }
                                />
                                <Text> x </Text>
                                <TextInput
                                    editable= { false }
                                    style={ styles.mealInput}
                                    onChangeText={ (): void => {} }
                                    value={ "3oz Chicken Breast" }
                                />
                                <FontAwesome name={ 'search' } style={ styles.searchIcon } />
                            </View>
                        )
                    })}
                </ScrollView>
            </View>

            <View style={ styles.submitBanner }>
                <Button text='Submit' style={ styles.submitButton } color='#adb7ff' />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
    },
    text: {
        fontFamily: 'futura',
        fontSize: 16,
    },
    submitBanner: {
        alignSelf: 'flex-end',
        justifyContent: 'center',
        height: 30,
    },
    contentContainer: {
        flex: 1,
        flexGrow: 1,
        width: '100%',
    },
    submitButton: {
        fontSize: 16,
        marginTop: 0,
        marginBottom: 0,
        marginLeft: 0,
        marginRight: 0,
    },
    macroContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
    },
    macroLabel: {
        fontSize: 16,
        fontFamily: 'futura',
        color: '#000',
        marginTop: 0,
        marginBottom: 0,
        minWidth: 60,
    },
    mealInput: {
        borderColor: 'rgba(0, 0, 0, 0.5)',
        borderBottomWidth: 1,
        borderStyle: 'solid',
        flexGrow: 1,
        fontSize: 16,
        fontFamily: 'futura',
        paddingLeft: 5,
    },
    mealQuantityInput: {
        borderColor: 'rgba(0, 0, 0, 0.5)',
        borderBottomWidth: 1,
        borderStyle: 'solid',
        width: 20,
        textAlign: 'center',
        fontSize: 18,
        fontFamily: 'futura',
    },
    mealInputContainer: {
        marginTop: 10,
        flexDirection: 'column',
        flex: 1,
        flexGrow: 1,
    },
    ingredientInputContainer: {
        flexDirection: 'row',
        marginTop: 5,
        marginBottom: 5,
    },
    searchIcon: {
        alignSelf: 'center',
        fontSize: 18,
    }
})

export default EditMealOverlay
