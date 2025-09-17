import React from "react";
import { StyleSheet, Text, View } from "react-native";

type Props = {
  children: React.ReactNode;
};

export default function AdvisoryBox({ children }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Due Today</Text>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingHorizontal: 5,
  },
  heading: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 10,
  },
});
