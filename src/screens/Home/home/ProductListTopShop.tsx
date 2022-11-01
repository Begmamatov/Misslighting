import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import ProductsTitle from '@components/uikit/ProductsTitle'
import ProductItemCard from './ProductItemCard'

type ProductListProps = {
    title: string
    imgRequire?: any
}

export default function ProductListTopShop(props: ProductListProps) {

    const products = [1, 2, 3, 4, 5, 6, 7, 8]

    return (
        <View>
            <ProductsTitle title={props.title} />
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={products}
                renderItem={({ item }) => <ProductItemCard showNewProduct={true} imgRequire={props.imgRequire} />}
                keyExtractor={(item) => item.toString()}
                style={styles.container}
                contentContainerStyle={styles.contentContainerStyle}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: { marginBottom: 15 },
    contentContainerStyle: { paddingHorizontal: 10 },
});