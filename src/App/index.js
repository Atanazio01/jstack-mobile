import { View, Modal, Text, StatusBar } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Button } from "../components/Button";
import { styles } from "./styles";
import { useState } from "react";

export default function App() {
  const [visible, setVisible] = useState(false);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.wrapper}>
        <View style={styles.container}>
          <Button onPress={() => setVisible(true)}>Abrir Modal</Button>
        </View>

        <Modal
          visible={visible}
          animationType="slide"
          statusBarTranslucent

          // Page Sheet -> * IOS Only 
          presentationStyle="pageSheet"
          // Full Screen -> * IOS Only 
          // presentationStyle="fullScreen"
          // Form Sheet -> * IOS Only 
          // presentationStyle="formSheet"
          // Over Full Screen -> * IOS Only 
          // presentationStyle="overFullScreen"
          // Over Current Context -> * IOS Only 
          // presentationStyle="overCurrentContext"
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
