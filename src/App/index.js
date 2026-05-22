import { Image, PixelRatio, Text, useWindowDimensions, View } from "react-native";
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

          <Text>
            {PixelRatio.get()}
          </Text>
          <Text>
            {PixelRatio.getFontScale()}
          </Text>
          <Text>
            {PixelRatio.getPixelSizeForLayoutSize(100)}
          </Text>
          <Text>
            {/* 8.49px -> 8px  essa função arredonda para o pixel mais próximo, muito usado para fontes e outras coisas que precisam ser arredondadas para o pixel mais próximo*/}
            {PixelRatio.roundToNearestPixel(8.49)} 
          </Text>

          <Image
            source={require("../images/user-icon/user-icon.png")}
            style={{ width: 100, height: 100 }}
          />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
