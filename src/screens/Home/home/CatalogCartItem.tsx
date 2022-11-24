import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

export default function CatalogCartItem() {
    return (
        <View style={styles.cartItem}>
            <Image style={styles.image} source={require('@images/ProductCatalog.png')} />
            <Text style={styles.title}>Осветительные Приборы</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    cartItem: {
        width: 192,
        height: 208,
        backgroundColor: '#fff',
        borderRadius: 15,
        marginRight: 20,
        marginBottom: 10,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 192,
        height: 171,
        borderRadius: 15,
        marginBottom: 10,
    },
    title: {
        fontSize: 12,
        fontWeight: '500',
        color: '#000',
    },
});