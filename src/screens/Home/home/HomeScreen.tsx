import { View, Text, ScrollView, StyleSheet, Image } from 'react-native'
import React from 'react'
import SearchNatlifHeader from '@components/uikit/Header/SearchNatlifHeader'
import { COLORS } from '@constants/colors'
import ProductList from './ProductList'
import ProductCatalog from './ProductCatalog'

export default function HomeScreen() {
    return (
        <ScrollView style={styles.scroll}>
            <Image style={styles.imageBannerTop} source={require('@images/BannerTop.png')} />
            <View style={styles.caruselBadge}>
                <View style={styles.caruselBadgeItem} />
                <View style={styles.caruselBadgeItem} />
                <View style={styles.caruselBadgeItem} />
                <View style={styles.caruselBadgeItem} />
            </View>
            <Image style={styles.imageBannerBattom} source={require('@images/BannerBattom.png')} />
            <View style={styles.caruselBadge}>
                <View style={styles.caruselBadgeItem} />
                <View style={styles.caruselBadgeItem} />
                <View style={styles.caruselBadgeItem} />
                <View style={styles.caruselBadgeItem} />
            </View>
            <View style={styles.container}>
                <SearchNatlifHeader />
                <ProductList />
                <ProductCatalog />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    scroll: {
        flex: 1,
        backgroundColor: COLORS.tabBgColor,
    },
    container: {
        flex: 1,
        paddingHorizontal: 15,
    },
    imageBannerTop: {
        width: '100%',
        height: 116,
        marginBottom: 10,
    },
    caruselBadge: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 15,
        paddingHorizontal: 40,
    },
    caruselBadgeItem: {
        width: 40,
        height: 5,
        borderRadius: 5,
        backgroundColor: '#84A9C0',
        marginHorizontal: 5,
    },
    imageBannerBattom: {
        width: '100%',
        height: 245,
        marginBottom: 10,
    },
})