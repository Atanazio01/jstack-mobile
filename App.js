import { Text, ScrollView, Platform } from 'react-native';

Platform.OS // Operational System (iOS, Android, Web, etc.)
Platform.Version // Version of the operational system
Platform.constants // Constants of the operational system
Platform.isPad // If the operational system is iPad
Platform.isTV // If the operational system is TV
Platform.isTesting // If the operational system is testing
Platform.select({ // Select a value based on the operational system
  ios: 'iOS',
  android: 'Android',
  default: 'Web'
})

export default function App() {
  return (

    <ScrollView>
      <Text style={{ fontSize: 32, marginTop: 50 }}>
        Hello JStack
      </Text>
    </ScrollView>
  );
}