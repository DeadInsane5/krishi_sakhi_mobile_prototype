import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ChatBotBar from "../components/ChatBotBar";
import ChatBotInput from "../components/ChatBotInput";
import ChatBotWelcome from "../components/ChatBotWelcome";
import ChatBotWidgets from "../components/ChatBotWidgets";

const ChatBotScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
      source={require("../assets/bg.png")}
      style={styles.bg}
      resizeMode="cover"
    >
      <View style={styles.innerContainer}>
        <ChatBotBar />
        <ChatBotWelcome />
        <ChatBotWidgets />
        <ChatBotInput />
      </View>
    </ImageBackground>
    </SafeAreaView>
  );
};

export default ChatBotScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bg: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    justifyContent: "space-between",
    paddingBottom: 10,
  },
});
