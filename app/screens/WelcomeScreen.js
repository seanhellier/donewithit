import React from "react";
import { View, ImageBackground, StyleSheet } from "react-native";

function WelcomeScreen(props) {
	return (
		<ImageBackground
			style={styles.background}
			source={require("../assets/background.jpg")}
		>
			<View style={styles.loginButton}></View>
		</ImageBackground>
	);
}
const styles = StyleSheet.create({
	background: {
		flex: 1,
	},
	loginButton: {
		width: "100",
		height: 70,
		backgroundColor: "#fc5c65",
	},
});

export default WelcomeScreen;
