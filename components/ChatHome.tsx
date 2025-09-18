import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";

const ChatBot: React.FC = () => {
  return (
    <Link href={"/screens/ChatBotScreen"} style={styles.chatButton}>
      <Ionicons name="person-circle" size={36} color="white" />
    </Link>
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