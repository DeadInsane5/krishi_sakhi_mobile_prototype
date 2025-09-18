import ActivityCalendar from "@/components/ActivityCalendar";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

const ActivityCalendarScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Activity</Text>

      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Ionicons name="calendar-outline" size={20} color="black" />
          <Text style={styles.headerText}>Calendar</Text>
        </View>
        <Text style={styles.headerText}>JULY 2025</Text>
      </View>

      <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
        <ActivityCalendar />
      </ScrollView>
    </View>
  );
};

export default ActivityCalendarScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f2ec",
    paddingHorizontal: 16,
    paddingTop: 50,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerText: {
    marginLeft: 8,
    fontSize: 14,
    fontWeight: "500",
  },
});
