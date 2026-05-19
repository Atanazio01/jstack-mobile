import { useState } from 'react';
import { Image, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Button } from '../components/Button';
import { styles } from "./styles";

export default function App() {
  const [isBlurred, setIsBlurred] = useState(true);
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.wrapper}>
        <View style={styles.container}>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1583&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            }}
            style={{ width: 300, height: 150, backgroundColor: "red" }}
            alt="Carro na garagem"
            resizeMode="cover"
            blurRadius={isBlurred ? 30 : 0} // para adicionar blur na imagem
          />

          <Button title="Adicionar blur" onPress={() => setIsBlurred(!isBlurred)}>
            {isBlurred ? "Mostrar imagem" : "Borrar imagem"}
          </Button>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
