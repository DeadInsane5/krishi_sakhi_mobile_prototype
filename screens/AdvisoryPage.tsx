import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import AdvisoryBox from "../components/AdvisoryBox";
import AdvisoryPageNav from "../components/AdvisoryPageNav";
import AdvisoryWeatherBox from "../components/AdvisoryWeatherBox";

export default function AdvisoryPage() {
  return (
    <ScrollView style={styles.container}>
      <AdvisoryPageNav />

      <AdvisoryBox>
        <AdvisoryWeatherBox time="1:18 PM" icon="weather-sunny" />
        <AdvisoryWeatherBox time="2:45 PM" icon="weather-pouring" />
        <AdvisoryWeatherBox time="5:00 PM" icon="weather-partly-rainy" />
        <AdvisoryWeatherBox time="8:18 PM" icon="weather-tornado" />
      </AdvisoryBox>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F6EE",
    padding: 15,
  },
});
