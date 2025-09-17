import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ChatBotBox from "../components/ChatBotBox";
import ChatBotSakhiBar from "../components/ChatBotSakhiBar";
import ChatBotWelcome from "../components/ChatBotWelcome";


const SakhiPage: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../assets/bg.png")} // 👈 add bg.png in assets
        style={styles.bg}
      >
        <View style={styles.overlay}>
          <ChatBotSakhiBar />
          <ChatBotWelcome />
          <ChatBotBox />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default SakhiPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  bg: {
    flex: 1,
    resizeMode: "cover",
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,0.9)", // light overlay
  },
});
