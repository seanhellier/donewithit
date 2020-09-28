import React from "react";
import { Text, Platform, StyleSheet } from "react-native";

function AppText({ children, StyleSheet }) {
	return <Text style={styles.text}>{children}</Text>;
}

const styles = StyleSheet.create({
	text: {
		fontSize: 18,
		fontFamily: Platform.OS === "android" ? "Roboto" : "avenir",
	},
});

export default AppText;
