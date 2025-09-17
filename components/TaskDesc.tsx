import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

interface TaskDescProps {
  description: string;
  setDescription: (text: string) => void;
}

const TaskDesc: React.FC<TaskDescProps> = ({ description, setDescription }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Description</Text>
      <TextInput
        style={styles.input}
        value={description}
        onChangeText={setDescription}
        placeholder="Enter task description"
        multiline
        numberOfLines={4}
      />
    </View>
  );
};

export default TaskDesc;

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
    height: 100,
    textAlignVertical: "top",
  },
});
