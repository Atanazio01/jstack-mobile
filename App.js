import { Platform, ScrollView, StatusBar } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import { Button } from './src/Button';

console.log(Platform.OS, StatusBar.currentHeight); // Android: Logs the height of the status bar. iOS: Logs undefined, as StatusBar height is not directly accessible.

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }} edges={['top', 'bottom']}>
        <ScrollView style={{ backgroundColor: '#222' }}>
          <StatusBar
            hidden={false} //is supported on both iOS and Android, but behavior may vary. iOS hides StatusBar completely, Android may not support full hiding on all versions. Test on both platforms.
            backgroundColor="#f00" //// Android: backgroundColormay be ignored on newer versions (Android 15+/API 35). Use native theming instead.
            barStyle="dark-content" // Supported on both platforms, but may not work on all Android versions. On iOS, it changes the text/icons to light color. On Android, behavior can be inconsistent across versions.
            animated={false} // Disable animation on Android to avoid inconsistent color transition behavior on newer versions.
            translucent={true} // Android: Setting to false ensures StatusBar does not overlay content, providing consistent layout across platforms. On iOS, this prop has no effect as StatusBar is non-translucent by default.
          />

          <Button />
          <Button />
          <Button />
          <Button />
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}