import { StyleSheet, Text, View } from "react-native";

export default function LangBlock(props: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.textSymbol}>{props.symbol}</Text>
      <Text style={styles.textName}>{props.name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,

    width: 140,
    height: 140,
    padding: 16,
    borderColor: '#6ABE4E',
    borderWidth: 8,
    borderRadius: 28
  },
  
  textSymbol: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#000000',
  },
    textName: {
    fontSize: 16,
    fontWeight: 'regular',
    color: '#000000',
  },
})
