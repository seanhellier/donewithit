import React, { useState } from "react";
import { Text, TextInput } from "react-native";
import AppTextInput from "./app/components/AppTextInput";

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
			<AppTextInput placeholder="Username" icon="email" />
		</Screen>
	);

	// <ListingDetailsScreen />;
}
