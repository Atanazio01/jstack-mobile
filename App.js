import { Text, ScrollView } from 'react-native';

export default function App() {
  return (
    <ScrollView>
      <Text
        style={{marginTop: 300, fontSize:32, width:1000}}
      >
        Oi tudo bem
      </Text>

      <ScrollView horizontal>
        <Text
          style={{fontSize:32, width:1000}}
        >
          JStack - O melhor curso de React e JavaScript e a parada toda
        </Text>
      </ScrollView>
    </ScrollView>
  );
}