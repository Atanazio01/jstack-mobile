import { Text, useWindowDimensions, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";

export default function App() {
  const { fontScale, scale, width, height } = useWindowDimensions();

  const orientation = width > height ? "landscape" : "portrait";

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.wrapper}>
        <View style={styles.container}>
          <Text>Font Scale: {fontScale}</Text>
          <Text>Pixel Ratio: {scale}</Text>
          <Text>
            Dimensions: {width}x{height}
          </Text>
          <Text>Orientation: {orientation}</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
