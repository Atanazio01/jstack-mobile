import { Text, ScrollView, Platform } from 'react-native';
import { print } from './src/utils/print';

import { Button } from './src/Button';

print();

export default function App() {
  return (
    <ScrollView style={{ marginTop: 200 }}>
      <Button />
    </ScrollView>
  );
}