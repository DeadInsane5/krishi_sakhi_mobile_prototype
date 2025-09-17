import AdvisoryPage from "@/screens/AdvisoryPage";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

const App = () => {
  return (
    <SafeAreaProvider>
      {/* <HomeScreen /> */}
      {/* <Chatbot /> */}
      {/* <ChatBotBox /> */}
      <AdvisoryPage/>
    </SafeAreaProvider>
  );
};

export default App;
