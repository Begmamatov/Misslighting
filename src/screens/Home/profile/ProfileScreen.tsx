import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import ProductsTitle from '@components/uikit/ProductsTitle'
import { NewAdminIcon, NewArrowIcon, NewBasketIcon, NewDiscountIcon, NewLocationIcon, NewLogOutIcon, NewMessageIcon, NewNotificationIcon, NewSettingIcon, NewTranstionIcon } from '@icons/icons'

export default function ProfileScreen() {
    return (
        <ScrollView style={style.container}>
            <ProductsTitle title="Профиль" showButton={false} />
            <View style={style.ProfileInfo}>
                <Image style={style.ProfileImage} source={require('@assets/images/profile.png')} />
                <View style={style.ProfileInfoTextBox}>
                    <Text style={style.ProfileInfoTextName}>Рафаэль</Text>
                    <Text style={style.ProfileInfoText}>Изменить личные данные</Text>
                </View>
            </View>
            <TouchableOpacity style={style.settingsButton}>
                <View style={style.settingsButtonIcon}>
                    <NewBasketIcon />
                    <Text style={style.settingsButtonText}>Мои заказы</Text>
                </View>
                <NewArrowIcon />
            </TouchableOpacity>
            <TouchableOpacity style={style.settingsButton}>
                <View style={style.settingsButtonIcon}>
                    <NewSettingIcon />
                    <Text style={style.settingsButtonText}>Настройки</Text>
                </View>
                <NewArrowIcon />
            </TouchableOpacity>
            <TouchableOpacity style={style.settingsButton}>
                <View style={style.settingsButtonIcon}>
                    <NewLocationIcon />
                    <Text style={style.settingsButtonText}>Мы на карте</Text>
                </View>
                <NewArrowIcon />
            </TouchableOpacity>
            <TouchableOpacity style={style.settingsButton}>
                <View style={style.settingsButtonIcon}>
                    <NewAdminIcon />
                    <Text style={style.settingsButtonText}>Техническая поддержка</Text>
                </View>
                <NewArrowIcon />
            </TouchableOpacity>
            <TouchableOpacity style={style.settingsButton}>
                <View style={style.settingsButtonIcon}>
                    <NewDiscountIcon />
                    <Text style={style.settingsButtonText}>Бонусная программа</Text>
                </View>
                <NewArrowIcon />
            </TouchableOpacity>
            <TouchableOpacity style={style.settingsButton}>
                <View style={style.settingsButtonIcon}>
                    <NewTranstionIcon />
                    <Text style={style.settingsButtonText}>Транзакции</Text>
                </View>
                <NewArrowIcon />
            </TouchableOpacity>
            <TouchableOpacity style={style.settingsButton}>
                <View style={style.settingsButtonIcon}>
                    <NewNotificationIcon />
                    <Text style={style.settingsButtonText}>Уведомления</Text>
                </View>
                <NewArrowIcon />
            </TouchableOpacity>
            <TouchableOpacity style={style.settingsButton}>
                <View style={style.settingsButtonIcon}>
                    <NewMessageIcon />
                    <Text style={style.settingsButtonText}>Сообщения</Text>
                </View>
                <NewArrowIcon />
            </TouchableOpacity>
            <TouchableOpacity style={style.logOutButton}>
                <NewLogOutIcon />
                <Text style={style.logOutButtonText}>Выйти из аккаунта</Text>
            </TouchableOpacity>

        </ScrollView>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
    },
    ProfileInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
        marginBottom: 20,
    },
    ProfileImage: {
        width: 86,
        height: 86,
        borderRadius: 100,
        marginRight: 15,
    },
    ProfileInfoTextBox: {
        flex: 1,
        flexDirection: 'column',
    },
    ProfileInfoTextName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
        color: '#000',
    },
    ProfileInfoText: {
        fontSize: 14,
        color: '#C8C8C8'
    },
    settingsButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 15,
        backgroundColor: '#fff',
        borderRadius: 5,
        shadowColor: '#E1E1E1',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 17,
        elevation: 1,
        marginBottom: 15,
        marginHorizontal: 15,
    },
    settingsButtonIcon: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    settingsButtonText: {
        fontSize: 15,
        fontWeight: 'bold',
        marginLeft: 10,
        color: '#000',
    },
    logOutButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 15,
        backgroundColor: '#fff',
        borderRadius: 5,
        shadowColor: '#E1E1E1',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 17,
        elevation: 1,
        marginBottom: 50,
        marginHorizontal: 15,
    },
    logOutButtonText: {
        fontSize: 15,
        fontWeight: 'bold',
        marginLeft: 10,
        color: '#000',
    },
})
