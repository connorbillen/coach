import { StyleSheet, Text, View } from 'react-native'

import * as React from 'react'
import { Fragment } from 'react'

const TreasureChest = (props: { content: () => JSX.Element, backdrop: boolean }): JSX.Element => {
    const backdrop: boolean = props.backdrop ? props.backdrop : true

    return (
        <Fragment>
            { backdrop && 
                <View style={styles.backdrop}>
                </View>
            }
            <View style={styles.container}>
                <View style={styles.handle}></View>
                <View style={styles.contentContainer}>
                    <Text style={styles.test}>TEST TEST TEST</Text>
                    <props.content />
                </View>
            </View>
        </Fragment>
    )
}

const styles = StyleSheet.create({
    backdrop: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        height: '100%',
        width: '100%',
        position: 'absolute',
        bottom: 0,
    },
    container: {
        backgroundColor: 'rgba(255, 255, 255, 1)',
        position: 'absolute',
        bottom: 0,
        maxHeight: '100%',
        paddingBottom: 30,
        paddingLeft: 15,
        paddingTop: 15,
        borderColor: '#000',
        borderRadius: 25,
        borderWidth: 1,
        width: '100%',
        alignItems: 'center',
    },
    handle: {
        height: 2,
        width: 72,
        backgroundColor: 'rgba(0, 0, 0, 0.15)',
        marginBottom: 12,
    },
    contentContainer: {
        width: '100%',
    },
    test: {
        color: '#000',
    },
})

export default TreasureChest
