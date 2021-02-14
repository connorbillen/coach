import { StyleSheet, View, Text } from 'react-native'

import * as React from 'react'

const NavHeader = (props: { style?: {} }): JSX.Element => {
    const style = {
        ...styles.navHeader,
        ...props.style,
    }

    const state = {
        selected: 'meals',
    }

    const menuOptions: string[] = [
        'meals',
        'training',
        'coach'
    ]

    return (
        <View style={ style }>
            { menuOptions.map((menuOption: string, index: number) => 
                <Text key={ index } style={{ ...styles.headerText, textDecorationLine: menuOption === state.selected ? 'underline' : 'none' }}>{ menuOption }</Text>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    navHeader: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    headerText: {
        fontFamily: 'futura',
        fontSize: 36,
        color: '#fff',
    },
  })
  

export default NavHeader;