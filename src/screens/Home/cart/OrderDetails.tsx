import React from "react";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";
//@ts-ignore
import MirImg from "../../../../assets/images/mir.png";
//@ts-ignore
import VisaImg from "../../../../assets/images/visa.png";
//@ts-ignore
import MastercardImg from "../../../../assets/images/mastercard.png";
import { COLORS } from "@constants/colors";
import { STRINGS } from "@locales/strings";

const OrderDetails = () => {
	return (
		<View style={styles.container}>
			<View style={styles.box}>
				<View style={styles.row}>
					<Text style={{ color: COLORS.labelText, }}>
						Товары ( 1 )
					</Text>
					<Text style={styles.price}>36.000.000 сум</Text>
				</View>
				<View style={styles.row}>
					<View style={{ flexDirection: "row", alignItems: "center" }}>
						<Text style={{ color: COLORS.labelText, }}>{STRINGS.ru.Delivery}</Text>
					</View>
					<Text style={{ color: COLORS.labelText, }}>30.000 сум</Text>
				</View>
				<View style={styles.rowFooter}>
					<Text style={styles.footerTxt}>{STRINGS.ru.totalPrice}</Text>
					<Text style={styles.total}> 36.000.000 сум </Text>
				</View>
			</View>
		</View>
	);
};

export default OrderDetails;

const styles = StyleSheet.create({
	container: {
		marginBottom: 20,
	},
	headerTxt: {
		fontSize: 19,
		color: COLORS.labelText,
	},

	box: {
		padding: 15,
		borderRadius: 8,
		backgroundColor: COLORS.bgColor2,
	},

	row: {
		flexDirection: "row",
		marginVertical: 10,
		justifyContent: "space-between",
	},

	price: {
		fontSize: 14,
		color: COLORS.labelText,
		fontWeight: "700",
	},

	image: {
		width: 30,
		height: 10,
		marginLeft: 5,
		marginTop: 2,
	},

	footerTxt: {
		fontSize: 16,
		fontWeight: "700",
		letterSpacing: 0.5,
		color: COLORS.black,
	},

	rowFooter: {
		marginTop: 5,
		flexDirection: "row",
		justifyContent: "space-between",
	},

	total: {
		fontSize: 16,
		fontWeight: "700",
		letterSpacing: 0.5,
		color: COLORS.black,
	},
});
