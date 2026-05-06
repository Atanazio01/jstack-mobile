import {
  FlatList,
  RefreshControl,
  Text,
  View,
  ActivityIndicator,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import { styles } from "./styles";
import { useEffect, useState } from "react";

const posts = Array.from({ length: 100 }, (_, index) => ({
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

function Header() {
  return (
    <View style={{ backgroundColor: "#ccc", padding: 16, borderRadius: 8 }}>
      <Text>Header</Text>
    </View>
  );
}

function Footer() {
  return (
    <View style={{ backgroundColor: "#000", padding: 24, borderRadius: 8 }}>
      <Text style={{ color: "#fff" }}>Footer</Text>
    </View>
  );
}

function EmptyState() {
  return (
    <View style={{ backgroundColor: "#555", padding: 24, borderRadius: 8 }}>
      <Text>No posts found</Text>
    </View>
  );
}

function Divider() {
  return (
    <View style={{ height: 1, backgroundColor: "#aaa", marginVertical: 12 }} />
  );
}

export default function App() {
  const [isRefreshing, setIsRefreshing] = useState(false);

  async function handleRefresh() {
    setIsRefreshing(true);

    await new Promise((resolve) => {
      setTimeout(resolve, 2000);
    });

    setIsRefreshing(false);
  }
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.wrapper}>
        <ActivityIndicator
          animating
          hidesWhenStopped // IOS only
          color="#f00"
          size="large" // tamanho númerico só funciona em Android
          style={{ marginTop: 20 }}
        />

        <FlatList
          refreshControl={
            <RefreshControl
              refreshing={isRefreshing}
              onRefresh={handleRefresh}
              // IOS
              tintColor="#f00"
              title="Carregando..."
              titleColor="#f00"
              // Android only
              colors={["#f00", "#00f", "#f00"]}
              progressBackgroundColor="#000"
              size="large"
            />
          }
          ListHeaderComponent={Header}
          ListFooterComponent={Footer}
          ListEmptyComponent={EmptyState}
          ItemSeparatorComponent={Divider}
          stickyHeaderIndices={[0]}
          style={styles.container}
          //contentContainerStyle={styles.contentContainer}
          data={posts}
          keyExtractor={(post) => post.id}
          renderItem={({ item: post }) => <ListItem title={post.title} />}
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
