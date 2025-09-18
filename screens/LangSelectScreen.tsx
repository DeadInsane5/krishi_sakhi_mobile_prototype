import LangBlock from "@/components/LangBlock";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";



export default function LangSelect() {
  return (
    <SafeAreaView style={styles.body}>
      <View style={styles.mainContainer}>
        <Text style={styles.textTitle}>Select Language</Text>
        <View style={styles.containerRow}>
          <View style={styles.containerCol}>
            <LangBlock symbol={"ക"} name={"Malayam"} />
            <LangBlock symbol={"अ"} name={"Hindi"} />
          </View>
          <View style={styles.containerCol}>
            <LangBlock symbol={"क"} name={"Marathi"} />
            <LangBlock symbol={"A"} name={"English"} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 12,
    backgroundColor: '#F4F1EA',
  },

  textTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
  },

  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 32,
    marginTop: 80,
  },

  containerRow: {
    display: 'flex',
    flexDirection: 'row',
    gap: 16,
  },

  containerCol: {
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
  }
})
