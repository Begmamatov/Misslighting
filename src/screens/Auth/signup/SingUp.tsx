import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import SingUpTemplate from '@components/template/SingUpTemplate'
import SectionTitle from '@components/uikit/SectionTitle'
import DefaultButton from '@components/uikit/DefaultButton'
import { COLORS } from '@constants/colors'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'


const Tab = createMaterialTopTabNavigator();

// function MyTabs() {
//     return (
//         <Tab.Navigator>
//             <Tab.Screen name="Home" component={ } />
//             <Tab.Screen name="Settings" component={ } />
//         </Tab.Navigator>
//     );
// }


export default function SingUpScreen() {
    return (
        <SingUpTemplate>
            <SectionTitle title="Регистрация" marginBottom={36} />
            <View style={styles.buttonsBox}>
                <DefaultButton
                    title='Физическое лицо'
                    ButtonStyle={{ backgroundColor: COLORS.noActiveButtonBgColor2, width: '50%' }}
                    TextStyle={{ color: COLORS.noActiveButtonTextColor, fontSize: 14 }}
                />
                <DefaultButton
                    title='Юридическое лицо'
                    ButtonStyle={{
                        backgroundColor: COLORS.activeButtonBgColor,
                        width: '50%',
                    }}
                    TextStyle={{ color: COLORS.white, fontSize: 14 }}
                />
            </View>

        </SingUpTemplate>
    )
}

const styles = StyleSheet.create({
    buttonsBox: {
        width: '100%',
        flexDirection: 'row',
        backgroundColor: COLORS.noActiveButtonBgColor2,
        borderRadius: 45,
        height: 55,
        marginBottom: 30,
    },
})