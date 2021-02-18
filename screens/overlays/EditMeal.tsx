import { StyleSheet, View, Text, SafeAreaView, ScrollView } from 'react-native'

import * as React from 'react'
import Button from '../../components/Button'
import ProgressBar from '../../components/ProgressBar'

const EditMealOverlay = (): JSX.Element => {

    return (
        <View style={ styles.container }>
            <SafeAreaView style={ styles.contentContainer }>
                <ScrollView>
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
                </ScrollView>
            </SafeAreaView>
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
})

export default EditMealOverlay
