import { Platform, ScrollView, StatusBar } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import { styles } from "./styles";
import { Button } from "../components/Button";

console.log(Platform.OS, StatusBar.currentHeight); // Android: Logs the height of the status bar. iOS: Logs undefined, as StatusBar height is not directly accessible.

export default function App() {
  const disabled = false;

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.wrapper} edges={["top", "bottom"]}>
        <ScrollView style={styles.container}>
          <Button disabled={disabled}>Oi Botão</Button>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
