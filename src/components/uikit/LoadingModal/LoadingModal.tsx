import { View, StyleSheet } from 'react-native'
import React from 'react'
import AnimatedLottieView from "lottie-react-native";
import { COLORS } from '@constants/colors';

const LoadingModal = () => {
    return (
        <View style={styles.animation}>
            <View style={{
                backgroundColor: COLORS.white,
                width: 250,
                height: 250,
                borderRadius: 20,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <AnimatedLottieView
                    source={require("@assets/animations/loading.json")}
                    autoPlay
                    loop
                    style={{
                        width: 170,
                        height: 170,
                        backgroundColor: COLORS.white,
                    }}
                />
            </View>
        </View>
    )
}

export default LoadingModal

const styles = StyleSheet.create({
    animation: {
        position: "absolute",
        justifyContent: "center",
        alignItems: "center",
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
});