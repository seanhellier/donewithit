import React from "react";
import { View, StyleSheet, Image } from "react-native";
import AppText from "./AppText";

function ListItems({ title, subTitle, image }) {
	return (
		<View style={styles.container}>
			<Image style={styles.image} source={image} />
			<View>
				<AppText>{title}</AppText>
				<AppText>{subTitle}</AppText>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
	},
	image: {
		height: 70,
		width: 70,
		borderRadius: 35,
		marginRight: 10,
	},
});

export default ListItems;
