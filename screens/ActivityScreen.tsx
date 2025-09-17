// screens/ActivityScreen.tsx
import React from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import ActivityBar from "../components/ActivityBar";
import ActivityIcon from "../components/ActivityIcon";
import ActivityCalendar from "../components/ActivityCalendar";

const ActivityScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ActivityBar />
      <ActivityIcon />
      <ActivityCalendar />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f6ef",
  },
});

export default ActivityScreen;