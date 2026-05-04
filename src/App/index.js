import { FlatList, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import { styles } from "./styles";
import { useEffect } from 'react';

const posts = Array.from({ length: 1000 }, (_, index) => ({
  id: index,
  title: `Post #${index + 1}`,
}));

function ListItem({ title }) {
  useEffect(() => {
    console.log(`Montando item ${title}`);
    return () => {
      console.log(`Desmontando item ${title}`);
    };
  }, []);

  return (
    <View style={styles.postContainer}>
      <Text style={styles.postTitle}>{title}</Text>
    </View>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.wrapper}>
          <FlatList
            style={styles.container}
            contentContainerStyle={styles.contentContainer}
            data={posts}
            keyExtractor={(post) => post.id}
            renderItem={({ item: post }) => (
              <ListItem title={post.title} />
            )}
            getItemLayout={(data, index) => ({
              index, 
              length: 64 + 16,
              offset: (64 + 16) * index,
            })}
          />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
