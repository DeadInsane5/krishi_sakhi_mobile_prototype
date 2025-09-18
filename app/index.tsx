import LangSelect from "@/screens/LangSelectScreen";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

const App = () => {
  return (
    <SafeAreaProvider>
      <LangSelect />
      {/* <ProfileScreen /> */}
      {/* <HomeScreen /> */}
      {/* <ChatBotScreen/> */}
      {/* <AdvisoryPage/> */}
      {/* <ActivityCalendarScreen /> */}
      {/* <ActivityTimelineScreen/> */}
      {/* <ActivityCreateScreen /> */}
    </SafeAreaProvider>
  );
};

export default App;
