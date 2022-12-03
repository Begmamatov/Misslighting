import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { COLORS } from '@constants/colors'

type Props = {
    title: string
    marginTop?: number
    marginBottom?: number
}

export default function SectionTitle(props: Props) {
    return (
        <Text style={
            [
                styles.text,
                {
                    marginTop: props.marginTop,
                    marginBottom: props.marginBottom,
                }
            ]}>{props.title}</Text>
    )
}

SectionTitle.defaultProps = {
    marginTop: 0,
    marginBottom: 28,
}

const styles = StyleSheet.create({
    text: {
        fontSize: 24,
        lineHeight: 48,
        fontWeight: 'bold',
        marginBottom: 28,
        color: COLORS.labelText,
    },
})