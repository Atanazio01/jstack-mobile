import {
  View,
  Modal,
  Text,
  StatusBar,
  Alert,
  ActionSheetIOS,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Button } from "../components/Button";
import { styles } from "./styles";
import { useState } from "react";

export default function App() {
  const [visible, setVisible] = useState(false);

  function handleShowAlert() {
    Alert.alert(
      "Atenção!",
      "Bloquear o usuário fará com que ele não possa acessar a aplicação.",
      [
        {
          text: "Bloquear",
          onPress: () => console.log("Bloquear usuário"),
          isPreferred: true, // * IOS Only
          style: "destructive", // * IOS Only
        },
        {
          text: "Cancelar",
          onPress: () => console.log("Cancelar"),
        },
        {
          text: "Depois",
          onPress: () => console.log("Depois"),
        },
      ],
      {
        cancelable: true, // Android Only
        onDismiss: () => console.log("Alerta dismissado"), // Android Only
        userInterfaceStyle: "light", // IOS Only
      },
    );
  }

  function handleShowPrompt() {
    // IOS Only
    Alert.prompt(
      "Responda:",
      "Qual o melhor curso da internet?",
      [
        {
          text: "Cancelar",
          style: "cancel",
          onPress: (value) => console.log("Cancelado:", value),
        },
        {
          text: "Enviar",
          isPreferred: true,
          onPress: (value) => console.log("Enviado:", value),
        },
      ],
      "plain-text",
      "",
      "",
      {
        userInterfaceStyle: "light",
      },
    );
  }

  // * IOS Only, quebra no android
  function handleShowActionSheet() {
    ActionSheetIOS.showActionSheetWithOptions(
      {
        title: "Selecione uma opção",
        message: "Selecione uma opção para continuar",
        options: ["Normal", "Destructive", "Cancel", "Disabled"],
        destructiveButtonIndex: 1,
        cancelButtonIndex: 2,
        disabledButtonIndices: [3],
        userInterfaceStyle: "light",
        tintColor: "purple",
        cancelButtonTintColor: "#0f0",
      },
      (selectedIndex) => {
        console.log("Selected index:", selectedIndex);
      },
    );
  }

  // * IOS Only, quebra no android
  function handleShowShareSheet() {
    ActionSheetIOS.showShareActionSheetWithOptions(
      {
        message: "Compartilhe esta aplicação",
        url: "https://www.google.com",
        subject: "Compartilhe esta aplicação",
        excludedActivityTypes: [
          "com.apple.UIKit.activity.PostToTwitter",
          "com.apple.UIKit.activity.PostToFacebook",
          "com.apple.UIKit.activity.PostToWeibo",
          "com.apple.UIKit.activity.Message",
          "com.apple.UIKit.activity.Mail",
        ],
      },
      error => console.log({error}),
      (success, method) => console.log({success, method}),
    );
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.wrapper}>
        <View style={styles.container}>
          <Button onPress={() => setVisible(true)}>Abrir Modal</Button>
          <Button onPress={handleShowAlert}>Mostrar Alerta</Button>
          <Button onPress={handleShowPrompt}>Mostrar Prompt</Button>
          <Button onPress={handleShowActionSheet}>Mostrar Action Sheet</Button>
          <Button onPress={handleShowShareSheet}>Mostrar ShareActionSheet</Button>
        </View>

        <Modal
          visible={visible}
          animationType="slide"
          statusBarTranslucent
          // Page Sheet -> * IOS Only
          presentationStyle="pageSheet"
          onRequestClose={() => setVisible(false)}
        >
          <StatusBar barStyle="light-content" animated />
          <View style={styles.modalOverlay}>
            <View style={styles.modalContainer}>
              <Text style={{ marginBottom: 16 }}>
                Este é o conteúdo do meu modal!
              </Text>
              <Button
                style={{ paddingHorizontal: 20 }}
                onPress={() => setVisible(false)}
              >
                Fechar
              </Button>
            </View>
          </View>
        </Modal>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
