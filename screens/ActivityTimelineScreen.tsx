import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import ActivityTimeline from "../components/ActivityTimeline";

const ActivityTimelineScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Timeline</Text>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <ActivityTimeline />
      </ScrollView>
    </View>
  );
};

export default ActivityTimelineScreen;

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
  scrollContent: {
    paddingBottom: 40,
  },
});
