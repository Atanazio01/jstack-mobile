import { Platform, StatusBar, View, Switch } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import { styles } from "./styles";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { useRef, useState } from "react";
import { TextArea } from "../components/TextArea";

console.log(Platform.OS, StatusBar.currentHeight); // Android: Logs the height of the status bar. iOS: Logs undefined, as StatusBar height is not directly accessible.

export default function App() {
  const passwordInputRef = useRef();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selected, setSelected] = useState(false);

  const disabled = false;

  function handleSubmit() {
    console.log({ email, password });
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.wrapper}>
        <View style={styles.container}>
          <Switch
            style={{ marginRight: "auto" }}
            value={selected}
            onValueChange={setSelected}
            disabled={false}
            thumbColor="purple"
            ios_backgroundColor="yellow" // IOS Only
            trackColor={{ true: "#0fa0f8", false: "yellow" }}
          />
          <TextArea placeholder="Descrição..." />

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
            value={email}
            onChangeText={setEmail}
          />
          <Input
            ref={passwordInputRef}
            placeholder="Senha"
            secureTextEntry
            keyboardType="number-pad"
            returnKeyType="done"
            onSubmitEditing={handleSubmit}
            value={password}
            onChangeText={setPassword}
          />
          <Button disabled={disabled} onPress={handleSubmit}>
            Enviar
          </Button>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
