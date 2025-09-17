import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const WelcomeSection: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/plant.png")} // 👈 place plant.png in assets folder
        style={styles.icon}
      />
      <Text style={styles.welcome}>Welcome Aditya!!</Text>
      <Text style={styles.desc}>
        I’m here to help you with farming questions, Crop advice, Weather
        information, your routine and more. You can ask me through text, upload
        images of your crops, or use voice messages.
      </Text>
    </View>
  );
};

export default WelcomeSection;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 20,
    paddingHorizontal: 20,
  },
  icon: {
    width: 80,
    height: 80,
    resizeMode: "contain",
    marginBottom: 10,
  },
  welcome: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  desc: {
    fontSize: 14,
    color: "#333",
    textAlign: "center",
    lineHeight: 20,
  },
});