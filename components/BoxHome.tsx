import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type Feature = {
  name: string;
  icon: keyof typeof Ionicons.glyphMap;
};

const features: Feature[] = [
  { name: "Advice", icon: "school" },
  { name: "My Activities", icon: "book" },
  { name: "Reminders", icon: "notifications" },
  { name: "Prices", icon: "stats-chart" },
  { name: "Knowledge", icon: "library" },
  { name: "Weather", icon: "cloud" },
];

const FeatureGrid: React.FC = () => {
  return (
    <View style={styles.grid}>
      {features.map((item, index) => (
        <TouchableOpacity key={index} style={styles.box}>
          <Ionicons name={item.icon} size={32} color="black" />
          <Text style={styles.featureText}>{item.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default FeatureGrid;

const styles = StyleSheet.create({
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  box: {
    width: "40%",
    height: 100,
    margin: 10,
    borderWidth: 2,
    borderColor: "#6cc070",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  featureText: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: "500",
  },
});