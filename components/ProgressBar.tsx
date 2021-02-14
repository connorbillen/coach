import { StyleSheet, View } from 'react-native'

import * as React from 'react'

const ProgressBar = (props: { progress: number, add?: number }): JSX.Element => {

    return (
        <View style={ styles.progressContainer }>
            <View style={{ ...styles.progress, width: styles.progressContainer.width * (props.progress / 100) }}></View>
            {
                props.add &&
                <View style={{
                    ...styles.progress,
                    width: styles.progressContainer.width * ((props.progress + props.add) / 100),
                    backgroundColor: 'rgba(255, 199, 185, 0.5)',
                }}></View>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    progressContainer: {
        height: 25,
        width: 250,
        backgroundColor: 'rgba(255, 255, 255, 1.0)',
        borderRadius: 5,
        borderColor: 'rgba(0, 0, 0, 0.3)',
        borderStyle: 'solid',
        borderWidth: 1,
    },
    progress: {
        width: 0,
        height: '100%',
        borderRadius: 5,
        backgroundColor: 'rgba(255, 199, 185, 1.0)',
        position: 'absolute',
    },
})

export default ProgressBar