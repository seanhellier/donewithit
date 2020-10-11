import React, { useState } from "react";
import { Text, TextInput } from "react-native";

// import WelcomeScreen from "./app/screens/WelcomeScreen";
// import ViewImageScreen from "./app/screens/ViewImageScreen";
// import Login from "./app/screens/Login";
// import Card from "./app/components/Card";
// import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
// import MessagesScreen from "./app/screens/MessagesScreen";

import Screen from "./app/components/Screen";

export default function App() {
	const [firstName, setFirstName] = useState("");

	return (
		<Screen>
			<Text>{firstName}</Text>
			<TextInput
				maxLength={5}
				keyboardType="numeric"
				clearButtonMode="always"
				secureTextEntry
				onChangeText={(text) => setFirstName(text)}
				placeholder="First Name"
				style={{
					borderBottomColor: "#ccc",
					borderBottomWidth: 1,
				}}
			/>
		</Screen>
	);

	// <ListingDetailsScreen />;
}
