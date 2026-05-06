import { View, Modal, Text, StatusBar, Alert } from "react-native";
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
          text: 'Cancelar',
          style: 'cancel',
          onPress: (value) => console.log('Cancelado:', value ),
        },
        {
          text: 'Enviar',
          isPreferred: true,
          onPress: (value) => console.log('Enviado:', value),
        }
      ],
      'plain-text',
      '',
      '',
      {
        userInterfaceStyle: 'light',
      }
    );
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.wrapper}>
        <View style={styles.container}>
          <Button onPress={() => setVisible(true)}>Abrir Modal</Button>
          <Button onPress={handleShowAlert}>Mostrar Alerta</Button>
          <Button onPress={handleShowPrompt}>Mostrar Prompt</Button>
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
