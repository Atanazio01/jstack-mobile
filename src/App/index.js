import { InputAccessoryView, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";

import { Button } from "../components/Button";
import { Input } from "../components/Input";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.wrapper}>
        <View style={styles.container}>
          <Input placeholder="Nome" inputAccessoryViewID="name" />
          <Input placeholder="Email" inputAccessoryViewID="email" />
          <Input placeholder="Idade" inputAccessoryViewID="age" />
        </View>
        <InputAccessoryView nativeID='name'>  {/* IOS only: InputAccessoryView is a view that is displayed above the keyboard */}
          <Button>Accessory do Nome</Button>
        </InputAccessoryView>
        <InputAccessoryView nativeID='email'>
          <Button>Accessory do Email</Button>
        </InputAccessoryView>
        <InputAccessoryView nativeID='age'>
          <Button>Accessory da Idade</Button>
        </InputAccessoryView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
