import { View, Text } from 'react-native'
import React from 'react'
import ProductsTitle from '@components/uikit/ProductsTitle'

export default function ProductCatalog() {
    return (
        <View>
            <ProductsTitle title='Популярные категории' showButton={false} />

        </View>
    )
}