import { Link } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ActivityTimelineBar from "./ActivityTimelineBar";

const dummyData = [
  { time: "01:00 PM", activity: "Krishi Sakri" },
  { time: "02:00 PM", activity: "Meeting with Client" },
  { time: "03:00 PM", activity: "Design Review" },
  { time: "04:00 PM", activity: "Code Implementation" },
  { time: "05:00 PM", activity: "Team Sync" },
  { time: "06:00 PM", activity: "Wrap Up" },
];

const ActivityTimeline = () => {
  return (
    <View style={styles.container}>
      {dummyData.map((item, index) => (
        <View key={index} style={styles.row}>
          {/* Left side: time + bar */}
          <View style={styles.leftColumn}>
            <Text style={styles.time}>{item.time}</Text>
            <ActivityTimelineBar
              isFirst={index === 0}
              isLast={index === dummyData.length - 1}
            />
          </View>

          {/* Right side: activity */}
          <Link href={"/screens/ActivityCreateScreen"}>
            <View style={styles.rightColumn}>
              <Text style={styles.activity}>{item.activity}</Text>
            </View>
          </Link>
        </View>
      ))}
    </View>
  );
};

export default ActivityTimeline;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
  },
  row: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 32,
  },
  leftColumn: {
    width: 90,
    alignItems: "center",
  },
  time: {
    fontSize: 12,
    color: "#6c757d",
    marginBottom: 4,
    textAlign: "center",
  },
  rightColumn: {
    flex: 1,
    justifyContent: "center",
    paddingLeft: 8,
  },
  activity: {
    fontSize: 15,
    fontWeight: "500",
    color: "#333",
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 8,
    elevation: 1, // subtle shadow on Android
    shadowColor: "#000", // subtle shadow on iOS
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },
});
