import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ProfileBar from "../components/ProfileBar";
import ProfileForm from "../components/ProfileForm";

const ProfileScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ProfileBar 
        title="Profile" 
        onBack={() => console.log("Back pressed")} 
        onMicPress={() => console.log("Mic pressed")} 
      />
      <ProfileForm />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default ProfileScreen;