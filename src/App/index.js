import { Platform, StatusBar, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import { styles } from "./styles";
import { Button } from "../components/Button";
import { Input } from "../components/Input";

console.log(Platform.OS, StatusBar.currentHeight); // Android: Logs the height of the status bar. iOS: Logs undefined, as StatusBar height is not directly accessible.

export default function App() {
  const disabled = false;

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.wrapper}>
        <View style={styles.container}>
          <Input placeholder="E-mail" />
          <Input placeholder="Senha" secureTextEntry />
          <Button disabled={disabled}>Oi Botão</Button>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
