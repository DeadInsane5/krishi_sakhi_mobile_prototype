import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

interface Message {
  id: string;
  sender: "user" | "bot";
  text: string;
}

interface ChatBotTextBubblesProps {
  messages: Message[];
}

const ChatBotTextBubbles: React.FC<ChatBotTextBubblesProps> = ({ messages }) => {
  return (
    <FlatList
      style={styles.list}
      data={messages}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View
          style={[
            styles.bubble,
            item.sender === "user" ? styles.userBubble : styles.botBubble,
          ]}
        >
          <Text
            style={
              item.sender === "user" ? styles.userText : styles.botText
            }
          >
            {item.text}
          </Text>
        </View>
      )}
    />
  );
};

export default ChatBotTextBubbles;

const styles = StyleSheet.create({
  list: {
    flex: 1,
    paddingHorizontal: 10,
  },
  bubble: {
    marginVertical: 5,
    padding: 10,
    borderRadius: 15,
    maxWidth: "80%",
  },
  userBubble: {
    backgroundColor: "#6cc070",
    alignSelf: "flex-end",
  },
  botBubble: {
    backgroundColor: "#e6e6e6",
    alignSelf: "flex-start",
  },
  userText: {
    color: "white",
  },
  botText: {
    color: "black",
  },
});
