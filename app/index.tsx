import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import ChatBotScreen from "./screens/ChatBotScreen";

const App = () => {
  return (
    <SafeAreaProvider>
      {/* <LangSelect /> */}
      {/* <ProfileScreen /> */}
      {/* <HomeScreen /> */}
      <ChatBotScreen/>
      {/* <AdvisoryPage/> */}
      {/* <ActivityCalendarScreen /> */}
      {/* <ActivityTimelineScreen/> */}
      {/* <ActivityCreateScreen /> */}
    </SafeAreaProvider>
  );
};

export default App;
