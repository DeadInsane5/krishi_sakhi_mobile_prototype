import React from "react";
import { StyleSheet, View } from "react-native";

interface Props {
  isFirst?: boolean;
  isLast?: boolean;
}

const ActivityTimelineBar: React.FC<Props> = ({ isFirst, isLast }) => {
  return (
    <View style={styles.container}>
      {/* Top line */}
      {!isFirst && <View style={styles.line} />}

      {/* Circle */}
      <View style={styles.circle} />

      {/* Bottom line */}
      {!isLast && <View style={styles.line} />}
    </View>
  );
};

export default ActivityTimelineBar;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "column",
    flex: 1,
  },
  line: {
    width: 2,
    flex: 1,
    backgroundColor: "#6c757d",
  },
  circle: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: "#4caf50", // green highlight
    marginVertical: 2,
  },
});
