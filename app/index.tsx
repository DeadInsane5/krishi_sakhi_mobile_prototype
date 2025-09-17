import ChatBotScreen from "@/screens/ChatBotScreen";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

// If CreateTaskPage.tsx is inside app folder:
import CreateTaskPage from "./TaskPage";

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
