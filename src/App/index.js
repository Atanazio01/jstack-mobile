import {
  Platform,
  ScrollView,
  StatusBar,
  View,
  Button,
  TouchableOpacity,
  Text,
} from 'react-native';
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
              title='Button'
              color="#000"
              onPress={() => alert('Button pressionado')}
            />

            <TouchableOpacity
              activeOpacity={0.1}
              onPress={() => alert('TouchableOpacity pressionado')}
              style={styles.button}
            >
              <Text style={styles.buttonLabel}>TouchableOpacity</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider >
  );
}