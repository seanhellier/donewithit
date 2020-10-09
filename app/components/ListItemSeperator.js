import React from "react";
import { StyleSheet, View } from "react-native";

import colors from "../config/colors";

function ListItemSeperator() {
	return <View style={styles.separator} />;
}

const styles = StyleSheet.create({
	separator: {
		width: "100%",
		height: 1,
		backgroundColor: colors.black,
	},
});

export default ListItemSeperator;
