import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import { CameraIcon, NotificationIcon, SearchIcon } from '@icons/icons'
import { COLORS } from '@constants/colors'

export default function SearchNatlifHeader() {
    return (
        <View style={styles.container}>
            <View style={styles.searchInputBox}>
                <SearchIcon fill={'#84A9C0'} style={{ marginRight: 10 }} />
                <TextInput style={styles.searchInput} placeholder="Я ищу..." />
                <CameraIcon fill={'#84A9C0'} style={{ marginLeft: 10 }} />
            </View>
            <View style={styles.NotificationBox}>
                <NotificationIcon fill={'#84A9C0'} />
                <View style={styles.NotificationBoxBadge}>
                    <Text style={styles.NotificationBoxBadgeText}>2</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        marginBottom: 20,
    },
    searchInputBox: {
        width: '85%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: COLORS.tabBgColor,
        height: 50,
        borderRadius: 45,
        paddingHorizontal: 15,
        marginBottom: 15,
        borderWidth: 2,
        borderColor: '#84A9C0',
    },
    searchInput: {
        fontSize: 16,
        backgroundColor: COLORS.tabBgColor,
        width: '75%',
    },
    NotificationBox: {
        width: 50,
        height: 50,
        backgroundColor: COLORS.tabBgColor,
        alignItems: 'center',
        justifyContent: 'center',
    },
    NotificationBoxBadge: {
        position: 'absolute',
        top: 0,
        right: 0,
        width: 20,
        height: 20,
        borderRadius: 20,
        backgroundColor: COLORS.TextActiveColor,
        alignItems: 'center',
        justifyContent: 'center',
    },
    NotificationBoxBadgeText: {
        fontSize: 12,
        color: COLORS.tabBgColor,
    },
})