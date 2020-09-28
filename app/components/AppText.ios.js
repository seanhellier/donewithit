import React from "react";
import { Text, StyleSheet } from "react-native";

function AppText({ children, StyleSheet }) {
	return <Text style={styles.text}>{children}</Text>;
}

const styles = StyleSheet.create({
	text: {
		fontSize: 40,
		fontFamily: "avenir",
		color: "tomato",
	},
});

export default AppText;
