import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { COLORS } from '@constants/colors'

type Props = {
    label?: string,
    placeholder: string,
    backgroundColor?: string,
    color?: string,
    placeholderColor?: string,
    marginBottom?: number,
}

export default function DefaultInput(props: Props) {
    return (
        <View style={[styles.inputBox, { marginBottom: props.marginBottom }]}>
            {props.label && <Text style={styles.inputLabel}>{props.label}</Text>}
            <TextInput
                placeholder={props.placeholder}
                placeholderTextColor={props.placeholderColor ? props.placeholderColor : '#000'}
                style={[styles.input, { backgroundColor: props.backgroundColor, color: props.color }]}
            />
        </View>
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
    inputBox: {
        width: '100%',
        marginBottom: 30,
    },
    inputLabel: {
        fontSize: 16,
        color: COLORS.labelText,
        marginBottom: 15,
    },
})