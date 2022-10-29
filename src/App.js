import { COLORS } from "./constants/colors";
import AppRouter from "./routes/AppRouter";
import React from "react";
import { Platform, StatusBar, UIManager, } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

if (Platform.OS === "android") {
	if (UIManager.setLayoutAnimationEnabledExperimental) {
		UIManager.setLayoutAnimationEnabledExperimental(true);
	}
}

const App = () => {
	return (
		<SafeAreaProvider>
			<StatusBar barStyle="dark-content" backgroundColor={COLORS.white} />
			<AppRouter />
		</SafeAreaProvider>
	);
};

export default App;

