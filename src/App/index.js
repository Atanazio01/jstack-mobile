import { Platform, StatusBar, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import { styles } from "./styles";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { useRef } from "react";

console.log(Platform.OS, StatusBar.currentHeight); // Android: Logs the height of the status bar. iOS: Logs undefined, as StatusBar height is not directly accessible.

export default function App() {
  const passwordInputRef = useRef();
  const disabled = false;

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.wrapper}>
        <View style={styles.container}>
          <Input
            placeholder="E-mail"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            autoComplete="email"
            onSubmitEditing={() => passwordInputRef.current.focus()}
            submitBehavior="blurAndSubmit"
            returnKeyType="next"
            enablesReturnKeyAutomatically //* IOS Only
          />
          <Input
            ref={passwordInputRef}
            placeholder="Senha"
            secureTextEntry
            keyboardType="number-pad"
            returnKeyType="done"
            onSubmitEditing={() => console.log("Enviar")}
          />
          <Button disabled={disabled}>Enviar</Button>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
