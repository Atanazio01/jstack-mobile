import { useState } from "react";
import { Image, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Button } from "../components/Button";
import { styles } from "./styles";

export default function App() {
  const [isBlurred, setIsBlurred] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.wrapper}>
        <View style={styles.container}>
          <View style={{position: 'relative'}}>
            {isLoading && (
              <Image
                source={{
                  uri: "https://placehold.co/300x150.png?text=Carregando...",
                }}
                style={{
                  position: 'absolute',
                  zIndex: 2,
                  width: 300,
                  height: 150,
                  backgroundColor: "purple",
                  borderRadius: 20,
                }}
              />
            )}
            {hasError && (
              <Image
                source={{
                  uri: "https://placehold.co/300x150.png?text=Erro!",
                }}
                style={{
                  position: 'absolute',
                  zIndex: 2,
                  width: 300,
                  height: 150,
                  backgroundColor: "purple",
                  borderRadius: 20,
                }}
              />
            )}
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1583&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              }}
              style={{
                width: 300,
                height: 150,
                backgroundColor: "purple",
                borderRadius: 20,
                overlayColor: "purple", // androir only // Na aula o Mateus fala que seria para resolver um bug no android onde ele pegava o ultimo pixel da imagem e esticava ele para o lado, mas aparentemente esse bug foi resolvido na versao 0.84.0 do react native, então essa propriedade não é mais necessária para resolver esse bug.
              }}
              alt="Carro na garagem"
              resizeMode="contain"
              blurRadius={isBlurred ? 20 : 0} // para adicionar blur na imagem
              defaultSource={require("../images/image-placeholder.png")}
              onLoadStart={() => setIsLoading(true)}
              onLoad={() => setIsLoading(false)}
              onError={() => {
                setIsLoading(false);
                setHasError(true);
                console.log("Erro ao carregar imagem");
              }}
              onProgress={(event) => {
                const { loaded, total } = event.nativeEvent;
                const percentage = (loaded / total) * 100;
                console.log(`Progress: ${percentage.toFixed(2)}%`);
              }}
            />
          </View>

          <Button
            title="Adicionar blur"
            onPress={() => setIsBlurred(!isBlurred)}
          >
            {isBlurred ? "Mostrar imagem" : "Borrar imagem"}
          </Button>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
