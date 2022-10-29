import { StyleSheet, TextInput } from 'react-native'
import React from 'react'

type Props = {
    placeholder: string,
    backgroundColor?: string,
    color?: string,
    placeholderColor?: string,
    marginBottom?: number,
}

export default function DefaultInput(props: Props) {
    return (
        <TextInput
            placeholder='Ваш номер'
            placeholderTextColor={props.placeholderColor ? props.placeholderColor : '#000'}
            style={[styles.input, { backgroundColor: props.backgroundColor, color: props.color, marginBottom: props.marginBottom }]}
        />
    )
}

DefaultInput.defaultProps = {
    backgroundColor: '#fff',
    color: '#000',
    placeholderColor: '#000',
    marginBottom: 25,
}

const styles = StyleSheet.create({
    input: {
        width: "100%",
        height: 55,
        backgroundColor: "#fff",
        borderRadius: 45,
        paddingHorizontal: 24,
        fontSize: 16,
        marginBottom: 25,
    },
})