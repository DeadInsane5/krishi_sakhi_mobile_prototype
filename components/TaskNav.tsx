import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const TaskNav: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Task</Text>
      <MaterialIcons name="mic" size={24} color="green" />
    </View>
  );
};

export default TaskNav;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
