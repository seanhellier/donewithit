import { StatusBar } from "expo-status-bar";
import React from "react";
import {
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	Button,
	Image,
} from "react-native";

import {
	useDimensions,
	useDeviceOrientation,
} from "@react-native-community/hooks";

export default function App() {
	console.log(useDeviceOrientation());

	const { landscape } = useDeviceOrientation();
	return (
		<SafeAreaView style={styles.container}>
			<View
				style={{
					backgroundColor: "dodgerblue",
					width: "100%",
					height: landscape ? "100%" : "30%",
				}}
			></View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "lightblue",
		alignItems: "center",
		justifyContent: "center",
	},
});
