import React from "react";
import { ScrollView, StyleSheet } from "react-native";

// import the 4 small components from your components folder
import TaskBottom from "../components/TaskBottom";
import TaskDesc from "../components/TaskDesc";
import TaskNav from "../components/TaskNav";
import TaskTitle from "../components/TaskTitle";

const CreateTaskPage: React.FC = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Top navigation bar */}
      <TaskNav />

      {/* Title input */}
      <TaskTitle title={""} setTitle={function (text: string): void {
              throw new Error("Function not implemented.");
          } } />

      {/* Description input */}
      <TaskDesc description={""} setDescription={function (text: string): void {
              throw new Error("Function not implemented.");
          } } />

      {/* Bottom section with + icon and Save Task button */}
      <TaskBottom onSave={function (): void {
              throw new Error("Function not implemented.");
          } } />
    </ScrollView>
  );
};

export default CreateTaskPage;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#f9f9f9",
    paddingHorizontal: 16,
    paddingTop: 20,
  },
});
