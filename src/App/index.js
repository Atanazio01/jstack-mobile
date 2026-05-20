import { useState } from "react";
import { ImageBackground, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Button } from "../components/Button";
import { styles } from "./styles";

export default function App() {
  const [isBlurred, setIsBlurred] = useState(true);

  return (
    <SafeAreaProvider>
      <ImageBackground source={require("../images/avatarIA.jpg")} style={{ flex: 1 }}>
        

        <SafeAreaView style={styles.wrapper}>
          <View style={styles.container}>


            <Button
              title="Adicionar blur"
              onPress={() => setIsBlurred(!isBlurred)}
            >
              {isBlurred ? "Mostrar imagem" : "Borrar imagem"}
            </Button>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </SafeAreaProvider>
  );
}
