import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { COLORS } from '@constants/colors'
import { HeartIconNotActive } from '@icons/icons'

type Props = {
    itemInfo: string
    imgRequire: any
    buttonTitle: string
}

export default function ShopAndNewsItem(props: Props) {
    return (
        <View style={styles.cartItem}>
            <Image style={styles.image} source={props.imgRequire} />
            <View style={styles.heartIconBox}>
                <HeartIconNotActive />
            </View>
            <View style={styles.cartItemInfo}>
                <View style={styles.cartItemInfoBox}>
                    <Text style={styles.typeText}>{props.itemInfo}</Text>
                </View>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>{props.buttonTitle}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cartItem: {
        width: 192,
        height: 330,
        backgroundColor: '#fff',
        borderRadius: 15,
        marginRight: 15,
        marginBottom: 20,
        flexDirection: 'column',
    },
    image: {
        width: 192,
        height: 156,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        marginBottom: 10,
        flexWrap: 'wrap',
    },
    heartIconBox: {
        position: 'absolute',
        top: 10,
        right: 10,
    },
    cartItemInfo: {
        paddingHorizontal: 10,
    },
    typeText: {
        fontSize: 18,
        fontWeight: '600',
        color: COLORS.black,
        marginBottom: 10,
    },
    cartItemInfoBox: {
        height: 100,
        marginBottom: 10,
    },
    button: {
        width: '100%',
        height: 42,
        borderRadius: 45,
        backgroundColor: COLORS.white,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: COLORS.textColorBlue,
    },
    buttonText: {
        fontSize: 15,
        fontWeight: '700',
        color: COLORS.textColorBlue,
        marginRight: 10,
    },
})
