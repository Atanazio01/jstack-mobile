import { View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";

import { AppText } from "../components/AppText";


export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.wrapper}>
        <View style={styles.container}>
          <AppText style={{ fontSize: 32 }}>Hello World</AppText>
          <AppText style={{ fontSize: 16 }}>Hello JStack</AppText>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
