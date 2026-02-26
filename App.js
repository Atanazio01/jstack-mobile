import { Text, View } from 'react-native';

export default function App() {
  return (
    <View>
      <Text 
      style={{ marginTop: 300, fontSize: 32, }}
      selectable // -> Selecionável booleano para permitir que o texto seja selecionado
      selectionColor="rgba(255,0,0,0.5)" // -> Cor da seleção do texto // * Android only
      >
        Oi JStack!!!!
      </Text>
    </View>
  );
}