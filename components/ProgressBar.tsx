import { StyleSheet, View, Text } from 'react-native'

import * as React from 'react'

const ProgressBar = (props: { progress: number, add?: number }): JSX.Element => {

    return (
        <View style={ !props.add ? 
            styles.progressContainer :
            {
                ...styles.progressContainer,
                width: props.progress + props.add,
                backgroundColor: 'rgba(255, 199, 184, 0.5)',
            }}>
            <View style={ !props.add ? 
                { ...styles.progress, width: styles.progressContainer.width * (props.progress / 100) } :
                { ...styles.progress, width: props.progress }
            }></View>
        </View>
    )
}

const styles = StyleSheet.create({
    progressContainer: {
        height: 25,
        width: 250,
        backgroundColor: 'rgba(255, 255, 255, 1.0)',
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