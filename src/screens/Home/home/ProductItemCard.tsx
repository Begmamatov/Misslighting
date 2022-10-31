import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS } from '@constants/colors'
import { BasketIcon } from '@icons/icons'

export default function ProductItemCard() {
    return (
        <View style={styles.cartItem}>
            <Image style={styles.image} source={require('@images/Item.png')} />
            <View style={styles.cartItemInfo}>
                <Text style={styles.typeText}>Люстры</Text>
                <Text style={styles.nameText}>KR77</Text>
                <Text style={styles.priceTextSile}>1.200.000 UZS</Text>
                <Text style={styles.priceText}>700.000 UZS</Text>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>В корзину</Text>
                    <BasketIcon fill={COLORS.textColorBlue} />
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
    },
    cartItemInfo: {
        paddingHorizontal: 10,
    },
    typeText: {
        fontSize: 13,
        fontWeight: '400',
        color: "#84A9C0",
    },
    nameText: {
        fontSize: 21,
        fontWeight: '600',
        color: "#3F3535",
        marginBottom: 5,
    },
    priceTextSile: {
        fontSize: 15,
        fontWeight: '400',
        color: COLORS.black,
        textDecorationLine: 'line-through',
        textDecorationStyle: 'solid',
        opacity: 0.5,
        marginBottom: 5,
    },
    priceText: {
        fontSize: 18,
        fontWeight: '400',
        color: COLORS.black,
        marginBottom: 20,
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
