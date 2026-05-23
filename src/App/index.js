import { Image, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";

import { SvgXml } from "react-native-svg";



import { UserIcon } from '../components/userIcon';
import userIcon from "../images/user-icon/user-icon.png";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.wrapper}>
        <View style={styles.container}>
          <Image source={userIcon} style={{ width: 100, height: 100 }} />

          <SvgXml
          width={400}
          height={400}
          viewBox="0 0 100 100"
            xml={`
            <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_316_5)">
<circle cx="49.5" cy="99.5" r="47.5" fill="black"/>
<path d="M48.6477 75.1818V81H47.9432V75.9205H47.9091L46.4886 76.8636V76.1477L47.9432 75.1818H48.6477ZM50.8324 76.6364L51.8778 78.4205L52.9233 76.6364H53.696L52.2869 78.8182L53.696 81H52.9233L51.8778 79.3068L50.8324 81H50.0597L51.446 78.8182L50.0597 76.6364H50.8324Z" fill="white"/>
<circle cx="50.5" cy="34.5" r="15.5" fill="black"/>
</g>
<defs>
<clipPath id="clip0_316_5">
<rect width="100" height="100" fill="white"/>
</clipPath>
</defs>
</svg>

            `}
          />
          <UserIcon />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
