import { Text, ScrollView } from 'react-native';

export default function App() {
  return (
    <ScrollView
      alwaysBounceVertical={false} // Só funciona no iOS, por padrão é true na ScrollView vertical e false na horizontal. Serve para desabilitar o efeito de "bounce" quando chegar no final da lista
    >
      <Text
        style={{marginTop: 300, fontSize:32}}
      >
        JStack - O melhor curso de React e JavaScript e a parada toda que existe
      </Text>

      <ScrollView 
        horizontal
        alwaysBounceHorizontal={false} // Só funciona no iOS, pois o android não tem esse efeito, por padrão é true na ScrollView horizontal e false na vertical. Serve para desabilitar o efeito de "bounce" quando chegar no final da lista
        bounces={false} // Serve para desabilitar o efeito de "bounce" tanto no iOS quanto no Android, independente da orientação da ScrollView. Se for usado, ele irá sobrepor as propriedades alwaysBounceVertical e alwaysBounceHorizontal
      >
        <Text
          style={{fontSize:32}}
        >
          JStack - O melhor curso de React e JavaScript e a parada toda que existe
        </Text>
      </ScrollView>
    </ScrollView>
  );
}