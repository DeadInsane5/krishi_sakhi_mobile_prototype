import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import axios from "axios";
import { Link } from "expo-router";
import React, { useState } from "react";
import { Alert, StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ProfileForm: React.FC = () => {
    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [crop, setCrop] = useState("");
    const [soilType, setSoilType] = useState("");
    const [irrigation, setIrrigation] = useState("");
    const [users, setUsers] = useState<any[]>([]);

    const [loading, setLoading] = useState(false);

    // useEffect(() => {
    //     const fetchUsers = async () => {
    //         try {
    //             const res = await axios.get("http://10.209.15.249:3000/api/profile");
    //             setUsers(res.data);
    //         } catch (error) {
    //             console.log("error fetching users", error);
    //             Alert.alert("Error fetching users");
    //         };
    //     };
    //     fetchUsers();
    // }, []);

    const handleSubmit = async () => {
        setLoading(true);
        try {
            const res = await axios.post("http://10.209.15.249:3000/api/profile", { name, location, crop, soilType, irrigation });
            Alert.alert("User created successfully");
            setUsers([...users, res.data]);
            setName("");
            setLocation("");
            setCrop("");
            setSoilType("");
            setIrrigation("");
        } catch (error) {
            console.log("error creating user", error);
            Alert.alert("Error creating user");
        }
        setLoading(false);
    };


    return (
        <SafeAreaView style={styles.outerContainer}>
            {/* display loading indicator if loading */}
            {loading && <Text style={{ textAlign: "center", marginTop: 10 }}>Loading...</Text>}
            <View style={styles.innerContainer}>
                {/* Name */}
                <View style={styles.labelRow}>
                    <Ionicons name="person" size={20} color="gray" />
                    <Text style={styles.labelText}>Name</Text>
                </View>
                <View style={styles.inputWrapper}>
                    <TextInput
                        style={styles.input}
                        value={name}
                        onChangeText={setName}
                    />
                </View>

                {/* Location */}
                <View style={styles.labelRow}>
                    <Ionicons name="location" size={20} color="gray" />
                    <Text style={styles.labelText}>Location</Text>
                </View>
                <View style={styles.inputWrapper}>
                    <TextInput
                        style={styles.input}
                        value={location}
                        onChangeText={setLocation}
                    />
                </View>

                {/* Crop */}
                <View style={styles.labelRow}>
                    <MaterialCommunityIcons name="leaf" size={20} color="gray" />
                    <Text style={styles.labelText}>Crop</Text>
                </View>
                <View style={styles.inputWrapper}>
                    <TextInput
                        style={styles.input}
                        value={crop}
                        onChangeText={setCrop}
                    />
                </View>

                {/* Soil Type */}
                <View style={styles.labelRow}>
                    <MaterialCommunityIcons name="shovel" size={20} color="gray" />
                    <Text style={styles.labelText}>Soil Type</Text>
                </View>
                <View style={styles.inputWrapper}>
                    <TextInput
                        style={styles.input}
                        value={soilType}
                        onChangeText={setSoilType}
                    />
                </View>

                {/* Irrigation */}
                <View style={styles.labelRow}>
                    <Ionicons name="water" size={20} color="gray" />
                    <Text style={styles.labelText}>Irrigation</Text>
                </View>
                <View style={styles.inputWrapper}>
                    <TextInput
                        style={styles.input}
                        value={irrigation}
                        onChangeText={setIrrigation}
                    />
                </View>

                {/* Create Button */}
                <Link href={"/screens/HomeScreen"} style={styles.button} onPress={() => handleSubmit()}>
                    <Text style={styles.buttonText}>Create</Text>
                </Link>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    outerContainer: {
        flex: 1,
        backgroundColor: "#f4f1ea"
    },
    innerContainer: {
        display: "flex",
        flex: 1,
        padding: 20,
    },
    labelRow: {
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
        marginTop: 10,
    },
    labelText: {
        fontSize: 15,
        fontWeight: "600",
        color: "#3a3a3a",
        marginLeft: 5,
    },
    inputWrapper: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 10,
        paddingHorizontal: 10,
        marginTop: 5,
        marginBottom: 15,
        backgroundColor: "#f9f9f9",
    },
    input: {
        flex: 1,
        marginLeft: 10,
        height: 40,
        fontSize: 15,
        color: "#222",
    },
    button: {
        backgroundColor: "#6ABE4E",
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
    },
    buttonText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 16,
    },
});

export default ProfileForm;