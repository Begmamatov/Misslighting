import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

type Props = {
    title: string,
    onPress?: () => void,
    backgroundColor?: string,
    color?: string,
    marginBottom?: number,
}

export default function DefaultButton(props: Props) {
    return (
        <TouchableOpacity style={
            [
                styles.button,
                {
                    backgroundColor: props.backgroundColor,
                    marginBottom: props.marginBottom,
                }
            ]
        }>
            <Text style={
                [
                    styles.buttonText,
                    {
                        color: props.color,
                    }
                ]}>
                {props.title}
            </Text>
        </TouchableOpacity>
    )
}

DefaultButton.defaultProps = {
    backgroundColor: '#fff',
    color: '#000',
    marginBottom: 25,
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