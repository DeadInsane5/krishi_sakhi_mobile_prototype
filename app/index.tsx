import ChatBotScreen from "@/screens/ChatBotScreen";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

const App = () => {
  return (
    <SafeAreaProvider>
      {/* <HomeScreen /> */}
      {/* <Chatbot /> */}
      {/* <ChatBotBox /> */}
      {/* <AdvisoryPage/> */}
      {/* <ProfileScreen /> */}
      <ChatBotScreen/>
    </SafeAreaProvider>
  );
};

export default App;
