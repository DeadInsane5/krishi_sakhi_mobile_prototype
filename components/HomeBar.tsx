import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Header: React.FC = () => {
  return (
    <View style={styles.header}>
      <Link href={"/screens/ProfileScreen"}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </Link>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Hello, User</Text>
        <Text style={styles.date}>Sunday, 14/09/2025 🗓</Text>
      </View>
      <Ionicons name="menu" size={28} color="black" />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#f9f6f1",
  },
  textContainer: {
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
  },
  date: {
    fontSize: 14,
    color: "#555",
  },
});