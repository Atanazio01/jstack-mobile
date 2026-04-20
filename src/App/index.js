import {
  Platform,
  ScrollView,
  StatusBar,
  View,
  Button,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
  TouchableNativeFeedback,
  Pressable,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import { styles } from "./styles";

console.log(Platform.OS, StatusBar.currentHeight); // Android: Logs the height of the status bar. iOS: Logs undefined, as StatusBar height is not directly accessible.

export default function App() {
  const disabled = false;

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.wrapper} edges={["top", "bottom"]}>
        <ScrollView style={styles.container}>
          <View style={styles.buttonsContainer}>
            <Button
              title="Button"
              color="#f00"
              onPress={() => alert("Button pressionado")}
              disabled
            />

            <TouchableOpacity
              activeOpacity={0.1}
              style={[styles.button, disabled && styles.buttonDisabled]}
              disabled={disabled}
              pressRetentionOffset={16} // 16 pixels de margem de segurança para aumentar a área de pressão do TouchableOpacity, evitando que o usuário precise pressionar exatamente no botão para acionar o evento de pressão.
              //
              onPress={() => alert("Pressionou")}
              onPressIn={() => console.log("onPressIn")}
              onPressOut={() => console.log("onPressOut")}
              onLongPress={() => console.log("onLongPress")}
              delayLongPress={3000} // 3 segundos
            >
              <Text style={styles.buttonLabel}>TouchableOpacity</Text>
            </TouchableOpacity>
            <TouchableHighlight
              onPress={() => alert("TouchableHighlight pressionado")}
              style={styles.button}
              underlayColor="#f00"
              activeOpacity={0.3} // só aplica opacidade ao conteúdo, não ao fundo, diferente do TouchableOpacity
            >
              <Text style={styles.buttonLabel}>TouchableHighlight</Text>
              {/* Não é possível passar mais de um filho para o TouchableHighlight, diferente do TouchableOpacity, que aceita múltiplos filhos. Mas da para contornar isso usando um View como container ou um fragment. Sempre use uma View, pois o  activeOpacity por exemplo só sera aplicado no filho direto do TouchableHighlight e como o fragment não é um elemento real, ele não será afetado */}
            </TouchableHighlight>
            <TouchableWithoutFeedback
              onPress={() => alert("TouchableWithoutFeedback pressionado")}
              // O TouchableWithoutFeedback não tem feedback visual, ele não possui a propriedade styles, mas podemos utilizar um View como filho para aplicar estilos e criar um feedback visual personalizado, como mudar a cor de fundo ou adicionar uma animação. Uma dica do Mateus Silva é evitar de usar o TouchableWithoutFeedback, pois ele não tem feedback visual, o que pode ser confuso para os usuários, e é melhor usar o TouchableOpacity ou TouchableHighlight para fornecer um feedback visual claro. Assim como o TouchableHighlight, o TouchableWithoutFeedback também não permite múltiplos filhos diretos.
            >
              <View style={styles.button}>
                <Text style={styles.buttonLabel}>TouchableWithoutFeedback</Text>
              </View>
            </TouchableWithoutFeedback>
            <View style={styles.androidButtonContainer}>
              <TouchableNativeFeedback
                onPress={() => alert("TouchableNativeFeedback pressionado")}
                background={TouchableNativeFeedback.Ripple("#f00")} // para aplicar o feedback visual nativo do Android, como o ripple effect. O TouchableNativeFeedback é específico para Android e não funciona no iOS, então é importante verificar a plataforma antes de usá-lo para evitar erros.
              >
                <View style={styles.button}>
                  <Text style={styles.buttonLabel}>
                    TouchableNativeFeedback
                  </Text>
                </View>
              </TouchableNativeFeedback>
            </View>

            <Pressable
              style={({ pressed }) => [
                styles.button,
                pressed && {
                  transform: "scale(0.9)",
                },
              ]}
              onPress={() => console.log("Pressable pressionado")}
              android_ripple={{ color: "#f00" }} // para aplicar o feedback visual nativo do Android, como o ripple effect. O Pressable é específico para Android e não funciona no iOS, então é importante verificar a plataforma antes de usá-lo para evitar erros.
              android_disableSound={true} // para desativar o som do feedback visual nativo do Android.
              
            >
              {({ pressed }) => (
                <Text style={[styles.buttonLabel, pressed && { opacity: 0.5 }]}>
                  Pressable
                </Text>
              )}
            </Pressable>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
