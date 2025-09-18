import { Ionicons } from "@expo/vector-icons";
import axios from "axios";
import React, { useState } from "react";
import {
  Alert,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

interface ChatBotInputProps {
  onSend: (userMessage: string, botReply: string) => void;
}

const ChatBotInput: React.FC<ChatBotInputProps> = ({ onSend }) => {
  const [query, setQuery] = useState("");
  const [thinking, setThinking] = useState(false);

  const handleSubmit = async () => {
    if (!query) return;
    setThinking(true);

    try {
      const res = await axios.post("http://10.209.15.249:3000/api/chat/text", {
        user_id: "demo_user",
        query,
      });

      const botReply =
        res.data?.response || "Sorry, I couldn’t understand that.";
      onSend(query, botReply);
      setQuery("");
    } catch (error) {
      Alert.alert("Error", "Error sending message to server");
    }

    setThinking(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Ionicons name="image" size={28} color="#6cc070" />
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        value={query}
        onChangeText={setQuery}
        placeholder="Type a message..."
        placeholderTextColor="#999"
      />
      <TouchableOpacity>
        <Ionicons name="mic" size={28} color="#6cc070" />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.sendBtn}
        onPress={handleSubmit}
        disabled={thinking}
      >
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
