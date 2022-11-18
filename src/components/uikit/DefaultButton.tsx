import { Text, TouchableOpacity, StyleSheet, ButtonProps, TextProps } from 'react-native'
import React from 'react'
import { COLORS } from '@constants/colors'

type Props = {
    title: string,
    onPress?: () => void,
    ButtonStyle?: {
        backgroundColor?: string,
        marginBottom?: number,
        marginTop?: number | string,
        width?: number | string,
    },
    TextStyle?: {
        color?: string,
        fontSize?: number,
    },
}

export default function DefaultButton(props: Props) {
    return (
        <TouchableOpacity
            style={
                [
                    styles.button,
                    props.ButtonStyle
                ]
            }
            onPress={props.onPress}
        >
            <Text style={
                [
                    styles.buttonText,
                    props.TextStyle
                ]
            }>
                {props.title}
            </Text>
        </TouchableOpacity>
    )
}

DefaultButton.defaultProps = {
    ButtonStyle: {
        backgroundColor: COLORS.white,
        marginBottom: 25,
    },
    TextStyle: {
        color: COLORS.black,
        fontSize: 16,
    }
}

const styles = StyleSheet.create({
    button: {
        width: "100%",
        height: 55,
        backgroundColor: '#fff',
        borderRadius: 45,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 25,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '700',
        color: '#000',
    },
})