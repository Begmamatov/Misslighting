import { View, Text, StyleSheet, ScrollView, FlatList } from 'react-native'
import React from 'react'
import ProductsTitle from '@components/uikit/ProductsTitle'
import OrderDetails from './OrderDetails';
import CartListItem from './CartListItem';
import DefaultButton from '@components/uikit/DefaultButton';
import { COLORS } from '@constants/colors';

export default function CartScreen() {

    const CartArray = [1, 2, 3, 4]

    return (
        <View>
            <ProductsTitle title="Корзина" showButton={false} />
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                <Text style={styles.title}>Детали заказа</Text>
                <OrderDetails />
                {/* <CartListItem /> */}
                <FlatList
                    data={CartArray}
                    renderItem={({ item }) => <CartListItem />}
                    showsVerticalScrollIndicator={false}
                    style={{ marginBottom: 20 }}
                />
                <DefaultButton title='Продолжить оформление' ButtonStyle={{ backgroundColor: COLORS.textColorBlue, marginBottom: 100 }} TextStyle={{ color: COLORS.white }} />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
    },
    title: {
        fontSize: 16,
        fontWeight: '500',
        color: '#000',
        marginBottom: 20,
    },
});