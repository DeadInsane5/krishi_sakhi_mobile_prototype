import ChatBotBar from "@/components/ChatBotBar";
import ChatBotInput from "@/components/ChatBotInput";
import ChatBotTextBubbles from "@/components/ChatBotTextBubbles";
import ChatBotWelcome from "@/components/ChatBotWelcome";
import ChatBotWidgets from "@/components/ChatBotWidgets";
import React from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ChatBotScreen: React.FC = () => {
  const [messages, setMessages] = React.useState<
    { id: string; sender: "user" | "bot"; text: string }[]
  >([]);

  const handleSend = async (userMessage: string) => {
    // Push user message immediately
    setMessages((prev) => [
      ...prev,
      { id: Date.now().toString() + "-u", sender: "user", text: userMessage },
    ]);

    try {
      const res = await fetch("http://10.209.15.249:5000/api/chat/text", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user_id: "demoUser", query: userMessage }),
      });
      const data = await res.json();

      // Add bot reply
      setMessages((prev) => [
        ...prev,
        { id: Date.now().toString() + "-b", sender: "bot", text: data.reply },
      ]);
    } catch (err) {
      console.error("❌ Bot error:", err);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <ChatBotBar />
        <ChatBotWelcome />
        <ChatBotTextBubbles messages={messages} />
        <ChatBotWidgets />
        <ChatBotInput onSend={handleSend} />
      </View>
    </SafeAreaView>
  );
};

export default ChatBotScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    justifyContent: "space-between",
    paddingBottom: 10,
  },
});
