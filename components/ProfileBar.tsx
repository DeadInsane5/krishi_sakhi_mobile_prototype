import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export interface ProfileBarProps {
    title: string;
    onBack?: () => void;
    onMicPress?: () => void;
}

const ProfileBar: React.FC<ProfileBarProps> = ({ title, onBack, onMicPress }) => {
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <TouchableOpacity onPress={onBack}>
                    <Ionicons name="chevron-back" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.title}>{title}</Text>
            </View>
            <TouchableOpacity onPress={onMicPress}>
                <Ionicons name="mic" size={24} color="#6ABE4E" />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 15,
        backgroundColor: "#f4f1ea",
    },
    titleContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
    },
});

export default ProfileBar;