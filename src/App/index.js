import { DrawerLayoutAndroid, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";

import { useRef } from "react";
import { Button } from "../components/Button";

export default function App() {
  const drawerRef = useRef(null);

  function handleOpenMenu() {
    drawerRef.current.openDrawer();
  }

  function handleCloseMenu() {
    drawerRef.current.closeDrawer();
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.wrapper}>
        <DrawerLayoutAndroid
          ref={drawerRef}
          drawerPosition="left"
          drawerWidth={250}
          drawerLockMode="locked-open"
          renderNavigationView={() => (
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "purple",
              }}
            >
              <Text>Oi Drawerzinho</Text>
              <Button onPress={handleCloseMenu}>Fechar Menu</Button>
            </View>
          )}
        >
          <View style={styles.container}>
            <Button onPress={handleOpenMenu}>Abrir Menu</Button>
          </View>
        </DrawerLayoutAndroid>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
