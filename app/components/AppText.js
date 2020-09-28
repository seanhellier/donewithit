import React from "react";
import { Text, Platform, StyleSheet } from "react-native";

function AppText({ children, StyleSheet }) {
	return <Text style={styles.text}>{children}</Text>;
}

Platform.select({
	ios: {
		fontSize: 40,
		fontFamily: "avenir",
	},
	android: {
		fontSize: 20,
		fontFamily: "Roboto",
	},
});
const styles = StyleSheet.create({
	text: {
		fontSize: 18,
		fontFamily: Platform.OS === "android" ? "Roboto" : "avenir",
		color: "blue",
	},
});

export default AppText;
