import React from "react";
import { StyleSheet, View } from "react-native";
import ActivityCreateBar from "../components/ActivityCreateBar";
import ActivityForm from "../components/ActivityForm";

const ActivityCreateScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <ActivityCreateBar />
      <ActivityForm />
    </View>
  );
};

export default ActivityCreateScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f2eb",
  },
});
