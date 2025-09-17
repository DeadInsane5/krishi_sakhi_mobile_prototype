import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface TaskBottomProps {
  onSave: () => void;
}

const TaskBottom: React.FC<TaskBottomProps> = ({ onSave }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.addButton}>
        <AntDesign name="plus" size={20} color="#555" />
        <Text style={styles.addText}> Add Task</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onSave} style={styles.saveButton}>
        <Text style={styles.saveText}>Save Task</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TaskBottom;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
  },
  addButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  addText: {
    color: "#555",
    fontSize: 16,
  },
  saveButton: {
    backgroundColor: "green",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
  saveText: {
    color: "white",
    fontWeight: "600",
  },
});
