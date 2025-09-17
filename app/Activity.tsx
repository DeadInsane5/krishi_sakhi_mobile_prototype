// App.tsx
import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import ActivityScreen from "../screens/ActivityScreen";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ActivityScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});