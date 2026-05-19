import { Image, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.wrapper}>
        <View style={styles.container}>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              width: 300,
              height: 150,
              method: 'GET', // caso precise de um metodo diferente de GET, como POST, PUT, DELETE, etc.
              body: 'image/jpeg', // caso precise de um body, como POST, PUT, DELETE, etc.
              headers: {
                'Content-Type': 'image/jpeg', // caso precise de um header, como POST, PUT, DELETE, etc.
              },
            }}
          />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
