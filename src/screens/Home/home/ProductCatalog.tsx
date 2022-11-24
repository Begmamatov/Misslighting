import { View, Text, FlatList } from 'react-native'
import React from 'react'
import ProductsTitle from '@components/uikit/ProductsTitle'
import CatalogCartItem from './CatalogCartItem'

export default function ProductCatalog() {

    const products = [1, 2, 3, 4, 5, 6, 7, 8]

    return (
        <View>
            <ProductsTitle title='Популярные категории' showButton={false} />
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={products}
                renderItem={({ item }) => <CatalogCartItem />}
                keyExtractor={(item) => item.toString()}
                style={{ marginBottom: 15, }}
                contentContainerStyle={{ paddingHorizontal: 15 }}
            />
        </View>
    )
}