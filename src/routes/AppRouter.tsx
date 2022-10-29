import { View, Text } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from "react-native-safe-area-context";
import LanguageScreen from '@auth/languageScreen/LanguageScreen';
import Login from '@auth/login/Login';
import SignUp from '@auth/signup/SignUp';

export default function AppRouter() {

	const insets = useSafeAreaInsets();

	return (
		<View style={{ flex: 1, marginTop: insets.top }}>
			<SignUp />
		</View>
	)
}