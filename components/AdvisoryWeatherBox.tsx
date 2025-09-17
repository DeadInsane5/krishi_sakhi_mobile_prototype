import { Entypo } from "@expo/vector-icons"; // ✅ Import Entypo from expo
import React from "react";
import { StyleSheet, Text, View } from "react-native";

// ✅ Define props type
type Props = {
  time: string;
  icon?: string;
};

export default function AdvisoryWeatherBox({ time, icon }: Props) {
  return (
    <View style={styles.container}>
      {/* Left section with time */}
      <View style={styles.left}>
        <Text style={styles.time}>{time}</Text>
      </View>

      {/* Green Box with Dropdown Icon */}
      <View style={styles.greenBox}>
        <Entypo name="chevron-down" size={20} color="white" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E0E0E0", // ✅ removed invalid "█"
    borderRadius: 12,
    padding: 10,
    marginVertical: 8,
    justifyContent: "space-between",
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  time: {
    marginLeft: 6,
    fontSize: 14,
    fontWeight: "500",
  },
  greenBox: {
    backgroundColor: "#4CAF50", // ✅ removed invalid "█"
    height: 40,
    width: 40,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
});
