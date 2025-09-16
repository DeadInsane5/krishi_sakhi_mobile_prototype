import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const ChatBot: React.FC = () => {
  return (
    <TouchableOpacity style={styles.chatButton}>
      <Ionicons name="person-circle" size={36} color="white" />
    </TouchableOpacity>
  );
};

export default ChatBot;

const styles = StyleSheet.create({
  chatButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "#6cc070",
    borderRadius: 50,
    padding: 12,
    elevation: 5,
  },
});