import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AppButton from "../components/AppButton";

export default function login() {
	return (
		<View
			style={{
				flex: 1,
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<AppButton title="Login" onPress={() => console.log("tapped")} />
		</View>
	);
}

const styles = StyleSheet.create({});
