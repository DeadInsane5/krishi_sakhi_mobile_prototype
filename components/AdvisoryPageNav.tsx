import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function AdvisoryPageNav() {
  return (
    <View style={styles.container}>
      {/* Weather */}
      <TouchableOpacity style={[styles.navBox, styles.active]}>
        <MaterialCommunityIcons name="weather-rainy" size={20} color="white" />
        <Text style={[styles.navText, { color: "white" }]}>Weather</Text>
      </TouchableOpacity>

      {/* Price */}
      <TouchableOpacity style={styles.navBox}>
        <FontAwesome5 name="dollar-sign" size={18} color="black" />
        <Text style={styles.navText}>Price</Text>
      </TouchableOpacity>

      {/* Pesticides */}
      <TouchableOpacity style={styles.navBox}>
        <MaterialCommunityIcons name="spray-bottle" size={20} color="black" />
        <Text style={styles.navText}>Pesticides</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },
  navBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#9FE2BF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  active: {
    backgroundColor: "#2F4F4F",
  },
  navText: {
    marginLeft: 5,
    fontWeight: "600",
  },
});
