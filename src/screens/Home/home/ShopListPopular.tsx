import { View, Text, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import ProductsTitle from '@components/uikit/ProductsTitle'
import ShopAndNewsItem from './ShopAndNewsItem'

type ProductListProps = {
    title: string
    imgRequire?: any
}

export default function ShopListPopular(props: ProductListProps) {

    const shops = [1, 2, 3, 4, 5, 6, 7, 8]

    return (
        <View>
            <ProductsTitle title={props.title} />
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={shops}
                renderItem={({ item }) => <ShopAndNewsItem itemInfo='Ваш Проводник Света' imgRequire={require('@images/Brand1.png')} buttonTitle='Посмотреть' />}
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