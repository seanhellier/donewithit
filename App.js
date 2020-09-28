import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

import AppText from "./app/components/AppText";

export default function App() {
	return (
		<View
			style={{
				flex: 1,
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<Text>I love React Native</Text>
		</View>
	);
}
