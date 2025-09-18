import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const FeatureGrid: React.FC = () => {
  return (
    <View style={styles.grid}>
      <Link href="/screens/AdvisoryPage" asChild style={styles.box}>
        <TouchableOpacity>
          <Ionicons name="school" size={32} color="black" />
          <Text style={styles.featureText}>Advice</Text>
        </TouchableOpacity>
      </Link>
      <Link href="/screens/ActivityCalendarScreen" asChild style={styles.box}>
        <TouchableOpacity>
          <Ionicons name="book" size={32} color="black" />
          <Text style={styles.featureText}>My Activities</Text>
        </TouchableOpacity>
      </Link>
      <TouchableOpacity style={styles.box}>
        <Ionicons name="notifications" size={32} color="black" />
        <Text style={styles.featureText}>Reminders</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.box}>
        <Ionicons name="stats-chart" size={32} color="black" />
        <Text style={styles.featureText}>Prices</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.box}>
        <Ionicons name="library" size={32} color="black" />
        <Text style={styles.featureText}>Knowledge</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.box}>
        <Ionicons name="cloud" size={32} color="black" />
        <Text style={styles.featureText}>Weather</Text>
      </TouchableOpacity>
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