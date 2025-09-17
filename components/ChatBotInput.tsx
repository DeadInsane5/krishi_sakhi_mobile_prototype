import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";

const ChatBotInput: React.FC = () => {
  

  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Ionicons name="image" size={28} color="#6cc070" />
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        placeholder="Type a message..."
        placeholderTextColor="#999"
      />
      <TouchableOpacity>
        <Ionicons name="mic" size={28} color="#6cc070" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.sendBtn}>
        <Ionicons name="send" size={22} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default ChatBotInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 20,
    paddingHorizontal: 15,
    marginHorizontal: 10,
    height: 40,
    backgroundColor: "white",
  },
  sendBtn: {
    backgroundColor: "#6cc070",
    padding: 10,
    borderRadius: 20,
    marginLeft: 5,
  },
});
