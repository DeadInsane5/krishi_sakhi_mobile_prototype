import React from "react";
import { StyleSheet, View } from "react-native";
import FeatureGrid from "../components/BoxHome";
import ChatBot from "../components/ChatHome";
import Header from "../components/HomeBar";
import News from "../components/NewsHome";

const HomeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Header />
      <News />
      <FeatureGrid />
      <ChatBot />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f6f1",
  },
});