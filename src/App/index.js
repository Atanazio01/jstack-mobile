import { Platform, ScrollView, StatusBar, View, Button } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import { styles } from './styles';

console.log(Platform.OS, StatusBar.currentHeight); // Android: Logs the height of the status bar. iOS: Logs undefined, as StatusBar height is not directly accessible.

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.wrapper} edges={['top', 'bottom']}>
        <ScrollView style={styles.container}>
          <View style={styles.buttonsContainer}>
            <Button
              title='Meu Button'
              color="#f00"
              onPress={() => alert('Button pressionado')}
              disabled={false} // Enables the button so it can be pressed.
              touchSoundDisabled // Disables click sound when pressing the button, Android only, since iOS has no click sound by default.
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}