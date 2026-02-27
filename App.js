import { ScrollView, StatusBar } from 'react-native';

import { Button } from './src/Button';

export default function App() {
  return (
    <ScrollView style={{ backgroundColor: '#222' }}>
      <StatusBar
        hidden={false} //is supported on both iOS and Android, but behavior may vary. iOS hides StatusBar completely, Android may not support full hiding on all versions. Test on both platforms.
        backgroundColor="#f00" //// Android: backgroundColormay be ignored on newer versions (Android 15+/API 35). Use native theming instead.
        barStyle="light-content" // Supported on both platforms, but may not work on all Android versions. On iOS, it changes the text/icons to light color. On Android, behavior can be inconsistent across versions.
        animated={false} // Disable animation on Android to avoid inconsistent color transition behavior on newer versions.
        translucent={true} // Android: Setting to false ensures StatusBar does not overlay content, providing consistent layout across platforms. On iOS, this prop has no effect as StatusBar is non-translucent by default.
      />

      <Button />
      <Button />
      <Button />
      <Button />
    </ScrollView>
  );
}