import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

// import your components from components folder
import TaskBottom from "../components/TaskBottom";
import TaskDesc from "../components/TaskDesc";
import TaskNav from "../components/TaskNav"; // adjust path
import TaskTitle from "../components/TaskTitle";

const CreateTaskPage: React.FC = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSave = () => {
    console.log("Task saved:", { title, description });
    // save logic here
  };

  return (
    <View style={styles.container}>
      <TaskNav />
      <TaskTitle title={title} setTitle={setTitle} />
      <TaskDesc description={description} setDescription={setDescription} />
      <TaskBottom onSave={handleSave} />
    </View>
  );
};

export default CreateTaskPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f7f2",
    paddingTop: 40,
  },
});
