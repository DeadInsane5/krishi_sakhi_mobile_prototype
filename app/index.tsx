import ChatBotBox from "@/components/ChatBotBox";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

const App = () => {
  return (
    <SafeAreaProvider>
      {/* <HomeScreen /> */}
      {/* <Chatbot /> */}
      <ChatBotBox />
    </SafeAreaProvider>
  );
};

export default App;
