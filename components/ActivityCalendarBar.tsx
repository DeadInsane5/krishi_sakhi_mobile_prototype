import React from "react";
import { StyleSheet, Text, View } from "react-native";

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const ActivityCalendarBar = () => {
  return (
    <View style={styles.container}>
      {days.map((day, index) => (
        <View key={index} style={styles.dayBox}>
          <Text style={styles.dayText}>{day}</Text>
        </View>
      ))}
    </View>
  );
};

export default ActivityCalendarBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  dayBox: {
    flex: 1,
    alignItems: "center",
    padding: 6,
    marginHorizontal: 2,
    backgroundColor: "#6bbf59",
    borderRadius: 4,
  },
  dayText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#fff",
  },
});
