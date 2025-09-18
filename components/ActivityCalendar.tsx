import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ActivityCalendarBar from "./ActivityCalendarBar";

const generateCalendar = (year: number, month: number) => {
  const firstDay = new Date(year, month, 1).getDay(); // 0=Sun, 1=Mon...
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const adjustedFirstDay = (firstDay === 0 ? 6 : firstDay - 1); // shift so Mon=0

  const weeks: (number | null)[][] = [];
  let week: (number | null)[] = new Array(adjustedFirstDay).fill(null);

  for (let day = 1; day <= daysInMonth; day++) {
    week.push(day);
    if (week.length === 7) {
      weeks.push(week);
      week = [];
    }
  }
  if (week.length > 0) {
    while (week.length < 7) week.push(null);
    weeks.push(week);
  }
  return weeks;
};

const ActivityCalendar = () => {
  const year = 2025;
  const month = 6; // July (0-indexed)
  const weeks = generateCalendar(year, month);

  return (
    <View style={styles.container}>
      <ActivityCalendarBar />
      {weeks.map((week, rowIndex) => (
        <View key={rowIndex} style={styles.weekRow}>
          {week.map((day, colIndex) => (
            <View key={colIndex} style={styles.dayCell}>
              {day ? <Text style={styles.dateText}>{day}</Text> : null}
            </View>
          ))}
        </View>
      ))}
    </View>
  );
};

export default ActivityCalendar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e6e6e6",
    borderRadius: 6,
    padding: 10,
  },
  weekRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  dayCell: {
    flex: 1,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  dateText: {
    fontSize: 14,
    color: "#333",
  },
});
