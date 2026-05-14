import {
  Image,
  View
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";

import avatarIA from "../images/avatarIA.jpg";

export default function App() {

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.wrapper}>
        <View style={styles.container}>
          <Image source={avatarIA} style={{ width: 300, height: 150}} />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
