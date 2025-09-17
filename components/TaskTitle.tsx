import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

interface TaskTitleProps {
  title: string;
  setTitle: (text: string) => void;
}

const TaskTitle: React.FC<TaskTitleProps> = ({ title, setTitle }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Title</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={setTitle}
        placeholder="Enter task title"
      />
    </View>
  );
};

export default TaskTitle;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  label: {
    fontWeight: "600",
    marginBottom: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 8,
  },
});
