import React from "react";
import { StyleSheet, Image, Text, View } from "react-native";

import ListItem from "../components/ListItem";
import AppText from "../components/AppText";
import colors from "../config/colors";

function ListingDetailsScreen(props) {
	return (
		<View>
			<Image style={styles.image} source={require("../assets/jacket.jpg")} />

			<View style={styles.detailsContainer}>
				<AppText style={styles.title}>Red Jacket for sale</AppText>
				<AppText style={styles.price}>$100</AppText>
				<View style={styles.userContainer}>
					<ListItem
						image={require("../assets/mosh.jpg")}
						title="Mosh Hamedi"
						subTitle="5 listings"
					/>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	detailsContainer: {
		padding: 20,
	},
	userContainer: {
		marginVertical: 40,
	},
	image: {
		width: "100%",
		height: 300,
	},

	title: {
		fontSize: 20,
		fontWeight: "300",
	},
	price: {
		color: colors.secondary,
		fontSize: 20,
		fontWeight: "bold",
		marginVertical: 10,
	},
});

export default ListingDetailsScreen;
