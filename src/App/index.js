import { ActivityIndicator, Platform, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";

import { useEffect, useState } from "react";
import { AppText } from "../components/AppText";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [todo, setTodo] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const host = Platform.OS === "android" ? "10.0.2.2" : "localhost";
      const response = await fetch(
        `http://${host}:3001/todos/1`,
      );
      const todoObject = await response.json();

      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setTodo(todoObject);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.wrapper}>
        <View style={styles.container}>
          {isLoading ? (
            <ActivityIndicator />
          ) : (
            <AppText style={{ fontSize: 32 }}>{todo.title}</AppText>
          )}
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
