import { StyleSheet, View, Text } from 'react-native'

import * as React from 'react'
import Button from '../../components/Button'
import { CardStyleInterpolators } from '@react-navigation/stack'

const EditMealOverlay = (): JSX.Element => {

    return (
        <View style={ styles.container }>
            <View style={ styles.contentContainer }>
                { '....................'.split('.').map( () => {
                return (
                    <Text style={ styles.text }>TEST TEST TEST</Text>
                )
                })}
            </View>
            <View style={ styles.submitBanner }>
                <Button text="Submit" style={ styles.submitButton } />
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
        borderWidth: 1,
        borderColor: '#000',
        borderStyle: 'solid',
        position: 'absolute',
        bottom: 0,
    },
    contentContainer: {
        borderWidth: 1,
        borderColor: '#000',
        borderStyle: 'solid',
    },
    submitButton: {
    },
})

export default EditMealOverlay
