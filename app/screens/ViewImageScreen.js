import React from "react";
import {
	Image,
	StyleSheet,
	View,
	SafeAreaView,
	Platform,
	StatusBar,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

function ViewImageScreen(props) {
	return (
		<SafeAreaView style={styles.container}>
			<MaterialCommunityIcons
				style={styles.trash}
				name="trash-can-outline"
				size={30}
				color="white"
			/>
			<MaterialCommunityIcons
				style={styles.close}
				name="close"
				size={30}
				color="white"
			/>
			<Image
				resizeMode="contain"
				style={styles.image}
				source={require("../assets/chair.jpg")}
			/>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	// menu: {

	container: {
		backgroundColor: "#000",
		flex: 1,
	},
	image: {
		width: "100%",
		height: "100%",
		marginTop: 40,
	},
	close: {
		position: "absolute",
		top: 40,
		left: 30,
		// paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
	},
	trash: {
		position: "absolute",
		top: 40,
		right: 30,
	},
});

export default ViewImageScreen;
