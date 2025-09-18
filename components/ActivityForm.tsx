import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

const ActivityForm: React.FC = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.label}>• Title</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter title"
        value={title}
        onChangeText={setTitle}
      />

      <Text style={styles.label}>• Description</Text>
      <TextInput
        style={styles.textArea}
        placeholder="Enter description"
        value={description}
        onChangeText={setDescription}
        multiline
      />

      <View style={styles.actions}>
        <TouchableOpacity>
          <Ionicons name="add-circle-outline" size={32} color="gray" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.saveText}>Save Task</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ActivityForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f5f2eb",
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 6,
  },
  input: {
    backgroundColor: "#ddd",
    borderRadius: 6,
    padding: 10,
    marginBottom: 16,
  },
  textArea: {
    backgroundColor: "#ddd",
    borderRadius: 6,
    padding: 10,
    height: 150,
    marginBottom: 16,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  saveButton: {
    backgroundColor: "green",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 6,
  },
  saveText: {
    color: "white",
    fontWeight: "600",
  },
});
