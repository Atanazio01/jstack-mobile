import { Text, ScrollView } from 'react-native';

export default function App() {
  return (
    <ScrollView
      persistentScrollbar // displays the scrollbar even when not scrolling, default value is false, only works on Android
      indicatorStyle='white' // changes the color of the scrollbar, only works on iOS
      showsVerticalScrollIndicator={false} // hides the vertical scrollbar, default value is true
    >
      <ScrollView
        horizontal
        style={{marginTop: 150}}
        persistentScrollbar
        showsHorizontalScrollIndicator={false}
      >
        <Text style={{ fontSize: 32 }}>
          JStack - O melhor curso de React e JavaScript e a parada toda que existe
        </Text>
      </ScrollView>

      <Text style={{ marginTop: 50, fontSize: 32 }}>
        JStack - O melhor curso de React e JavaScript e a parada toda que existe
        JStack - O melhor curso de React e JavaScript e a parada toda que existe
        JStack - O melhor curso de React e JavaScript e a parada toda que existe
        JStack - O melhor curso de React e JavaScript e a parada toda que existe
        JStack - O melhor curso de React e JavaScript e a parada toda que existe
        JStack - O melhor curso de React e JavaScript e a parada toda que existe
        JStack - O melhor curso de React e JavaScript e a parada toda que existe
        JStack - O melhor curso de React e JavaScript e a parada toda que existe
        JStack - O melhor curso de React e JavaScript e a parada toda que existe
        JStack - O melhor curso de React e JavaScript e a parada toda que existe
        JStack - O melhor curso de React e JavaScript e a parada toda que existe
        JStack - O melhor curso de React e JavaScript e a parada toda que existe
        JStack - O melhor curso de React e JavaScript e a parada toda que existe
        JStack - O melhor curso de React e JavaScript e a parada toda que existe
        JStack - O melhor curso de React e JavaScript e a parada toda que existe
        JStack - O melhor curso de React e JavaScript e a parada toda que existe
        JStack - O melhor curso de React e JavaScript e a parada toda que existe
        JStack - O melhor curso de React e JavaScript e a parada toda que existe
        JStack - O melhor curso de React e JavaScript e a parada toda que existe
        JStack - O melhor curso de React e JavaScript e a parada toda que existe
        JStack - O melhor curso de React e JavaScript e a parada toda que existe
        JStack - O melhor curso de React e JavaScript e a parada toda que existe
        JStack - O melhor curso de React e JavaScript e a parada toda que existe
        JStack - O melhor curso de React e JavaScript e a parada toda que existe
        JStack - O melhor curso de React e JavaScript e a parada toda que existe
        JStack - O melhor curso de React e JavaScript e a parada toda que existe
        JStack - O melhor curso de React e JavaScript e a parada toda que existe
        JStack - O melhor curso de React e JavaScript e a parada toda que existe
        JStack - O melhor curso de React e JavaScript e a parada toda que existe
        JStack - O melhor curso de React e JavaScript e a parada toda que existe
        JStack - O melhor curso de React e JavaScript e a parada toda que existe
        JStack - O melhor curso de React e JavaScript e a parada toda que existe
        JStack - O melhor curso de React e JavaScript e a parada toda que existe
      </Text>


    </ScrollView>
  );
}