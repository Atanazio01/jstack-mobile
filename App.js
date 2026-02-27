import { Text, ScrollView } from 'react-native';

console.log("Fora do componente")
export default function App() {
  console.log("Dentro do componente")
  return (

    <ScrollView
      persistentScrollbar // displays the scrollbar even when not scrolling, default value is false, only works on Android
      indicatorStyle='white' // changes the color of the scrollbar, only works on iOS
      showsVerticalScrollIndicator={false} // hides the vertical scrollbar, default value is true
      //scrollEventThrottle={16} // controls how often the onScroll callback is called, default value is 0, which means that the callback will be called as often as possible // only works on Android in the latest versions of React Native, in older versions it works on both platforms, but it is recommended to use it only on Android, as it can cause performance issues on iOS
      //onScroll={(event) => console.log(event.nativeEvent.contentOffset.y)} // callback that is called when the user scrolls, receives an event object as a parameter. The event object contains a nativeEvent property, which has a contentOffset property that contains the current scroll position of the ScrollView. The contentOffset property is an object with x and y properties, which represent the horizontal and vertical scroll positions, respectively.

      //onScrollBeginDrag={() => console.log("BeginDrag")} // callback that is called when the user starts dragging the ScrollView
      //onScrollEndDrag={() => console.log("EndDrag")} // callback that is called when the user stops dragging the ScrollView
      
      onScrollToTop={() => console.log("ScrollToTop")} // callback that is called when the user taps the status bar on iOS, which scrolls the ScrollView to the top. This callback is only called on iOS, as this behavior does not exist on Android.
      >
      <ScrollView
        horizontal
        style={{marginTop: 150}}
        persistentScrollbar
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        onScroll={(event) => console.log(event.nativeEvent.contentOffset.x)}
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