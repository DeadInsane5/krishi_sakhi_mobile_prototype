import React from "react";
import { View, StyleSheet, ImageBackground } from "react-native";
import ChatBotSakhiBar from "../components/ChatBotSakhiBar";
import ChatBotWelcome from "../components/ChatBotWelcome";
import ChatBotBox from "../components/ChatBotBox";

const SakhiPage: React.FC = () => {
  return (
    <ImageBackground
      source={require("../assets/bg.png")} // 👈 add bg.png in assets
      style={styles.bg}
    >
      <View style={styles.overlay}>
        <ChatBotSakhiBar />
        <ChatBotWelcome/>
        <ChatBotBox />
      </View>
    </ImageBackground>
  );
};

export default SakhiPage;

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    resizeMode: "cover",
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,0.9)", // light overlay
  },
});