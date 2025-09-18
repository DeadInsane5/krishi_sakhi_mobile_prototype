import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Link } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const ActivityCreateBar: React.FC = () => {
  return (
    <View style={styles.container}>
      <Link href={"/screens/ActivityTimelineScreen"}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </Link >

      <Text style={styles.title}>Create Task</Text>

      <TouchableOpacity>
        <MaterialCommunityIcons name="microphone" size={24} color="green" />
      </TouchableOpacity>
    </View>
  );
};

export default ActivityCreateBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
    backgroundColor: "#f5f2eb",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
