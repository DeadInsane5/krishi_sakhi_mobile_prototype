import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const News: React.FC = () => {
  return (
    <TouchableOpacity style={styles.newsButton}>
      <Text style={styles.newsText}>News</Text>
    </TouchableOpacity>
  );
};

export default News;

const styles = StyleSheet.create({
  newsButton: {
    backgroundColor: "#6cc070",
    margin: 20,
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  newsText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});