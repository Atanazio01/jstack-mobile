import { Platform, StatusBar, TextInput, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import { styles } from "./styles";
import { Button } from "../components/Button";

console.log(Platform.OS, StatusBar.currentHeight); // Android: Logs the height of the status bar. iOS: Logs undefined, as StatusBar height is not directly accessible.

export default function App() {
  const disabled = false;

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.wrapper} edges={["top", "bottom"]}>
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder="E-mail"
            placeholderTextColor="#aaa"
            editable // inicia em true
            //readOnly //tem o mesmo funcionamento do editable
            //textAlign="center" // também podemos alinhas via css
            //maxLength={9}
            //caretHidden={false} // esconde o cursor que fica piscando ao focar no input
            //cursorColor="#f00" // Android only
            //selectionColor="f00" // funciona no Android e IOS
            autoFocus // Faz com que já entre na tela com foco nesse elemento
          />
          <TextInput
            style={styles.input}
            placeholder="Senha"
            placeholderTextColor="#aaa"
            secureTextEntry
          />
          <Button disabled={disabled}>Oi Botão</Button>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
