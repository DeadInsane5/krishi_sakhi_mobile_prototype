import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import ProfileScreen from "../screens/ProfileScreen";

const App = () => {
  return (
    <SafeAreaProvider>
      <ProfileScreen />
    </SafeAreaProvider>
  );
};

export default App;