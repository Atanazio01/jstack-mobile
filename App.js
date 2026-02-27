import { Text, ScrollView, Platform } from 'react-native';

const isAndroid = Platform.OS === 'android';

export default function App() {
  return (
    <ScrollView>
      <Text style={{ fontSize: 32, marginTop: isAndroid ? 50 : 100 }}>
        {Platform.select({
          ios: 'Hello, iOS!',
          android: <Text style={{ color: 'green', fontWeight: 'bold' }}>Hello, Android!</Text>,
          native: 'Hello, native platform!',
          default: 'Hello, unknown platform!',
        })}
      </Text>
      <Text style={{ fontSize: 24, marginTop: 20 }}>

        {isAndroid ? 'Running on Android' : 'Running on iOS'}
      </Text>
    </ScrollView>
  );
}