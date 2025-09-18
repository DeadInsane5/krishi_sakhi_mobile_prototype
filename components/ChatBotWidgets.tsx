import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const ChatBotBox: React.FC = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.box}>
        <Ionicons name="chatbubble-ellipses" size={20} color="white" />
        <Text style={styles.text}>Ask Question</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.box}>
        <Ionicons name="camera" size={20} color="white" />
        <Text style={styles.text}>Upload Images</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.box}>
        <Ionicons name="mic" size={20} color="white" />
        <Text style={styles.text}>Voice Message</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ChatBotBox;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20
  },
  box: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#6cc070",
    padding: 10,
    marginHorizontal: 5,
    borderRadius: 8,
  },
  text: {
    color: "white",
    fontSize: 14,
    marginLeft: 5,
  },
});