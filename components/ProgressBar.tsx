import { StyleSheet, View, Text } from 'react-native'

import * as React from 'react'

const ProgressBar = (props: { progress: number }): JSX.Element => {

    return (
        <View style={ styles.progressContainer }>
            <View style={{ ...styles.progress, width: styles.progressContainer.width * (props.progress / 100) }}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    progressContainer: {
        height: 25,
        width: 250,
        backgroundColor: '#fff',
        borderRadius: 5,
    },
    progress: {
        width: 0,
        height: '100%',
        borderRadius: 5,
        backgroundColor: '#ffc7b8',
    },
})

export default ProgressBar