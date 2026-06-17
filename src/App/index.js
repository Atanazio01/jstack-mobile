import { ActivityIndicator, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";

import { useEffect, useState } from "react";
import { AppText } from "../components/AppText";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos/1",
      );
      const json = await response.json();

      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setData(json);
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
            <AppText style={{ fontSize: 32 }}>{data.title}</AppText>
          )}
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
