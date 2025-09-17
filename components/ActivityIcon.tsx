// components/ActivityIcon.tsx
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const ActivityIcon: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Ionicons name="calendar" size={20} color="black" />
        <Text style={styles.text}>Calendar</Text>
      </View>
      <Text style={styles.rightText}>JULY 2025</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    alignItems: "center",
    marginBottom: 10,
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    marginLeft: 6,
  },
  rightText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ActivityIcon;