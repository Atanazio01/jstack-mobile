import { Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";


export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.wrapper}>
        <View style={styles.container}>
          <Text style={{
            fontSize: 32,
            fontFamily: "Danfo-Regular",
          }}>Hello World</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
