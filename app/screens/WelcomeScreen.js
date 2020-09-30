import React from "react";
import {
	View,
	ImageBackground,
	StyleSheet,
	Image,
	Text,
	Button,
	Alert,
} from "react-native";

import colors from "../config/colors";

function WelcomeScreen(props) {
	return (
		<ImageBackground
			style={styles.background}
			source={require("../assets/background.jpg")}
		>
			<View style={styles.logoContainer}>
				<Image style={styles.logo} source={require("../assets/logo-red.png")} />
				<Text>Sell what you don't need</Text>
			</View>
			<Button title="Login" />
			<Button
				title="Register"
				onPress={() =>
					Alert.alert("Please Login", "Thank You", [
						{ text: "Yes", onPress: () => console.log("Yes") },
						{ text: "No", onPress: () => console.log("No") },
					])
				}
			/>

			<View style={styles.registerContainer}>
				<View style={styles.registerButton} />
				<Text>Register</Text>
			</View>
		</ImageBackground>
	);
}
const styles = StyleSheet.create({
	background: {
		flex: 1,
		justifyContent: "flex-end",
		alignItems: "center",
	},
	logo: {
		width: 100,
		height: 100,
	},
	logoContainer: {
		position: "absolute",
		top: 70,
		alignItems: "center",
	},
});

export default WelcomeScreen;
