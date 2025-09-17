// components/ActivityCalendar.tsx
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const ActivityCalendar: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.weekRow}>
        {days.map((day, index) => (
          <Text key={index} style={styles.dayText}>
            {day}
          </Text>
        ))}
      </View>

      <View style={styles.calendarBox}>
        {Array.from({ length: 35 }).map((_, i) => (
          <View key={i} style={styles.dayBox} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
  },
  weekRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  dayText: {
    flex: 1,
    textAlign: "center",
    fontWeight: "bold",
  },
  calendarBox: {
    backgroundColor: "#e0e0e0",
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 10,
    borderRadius: 8,
  },
  dayBox: {
    width: "13%",
    aspectRatio: 1,
    backgroundColor: "#6cc070",
    margin: "1%",
    borderRadius: 4,
  },
});

export default ActivityCalendar;