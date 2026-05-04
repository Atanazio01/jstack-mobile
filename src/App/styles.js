import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    paddingHorizontal: 20,
    flex: 1,
  },
  contentContainer: {
    alignItems: "flex-start",
    gap: 16,
  },
  postContainer: {
    backgroundColor: "#333",
    padding: 24,
    borderRadius: 8,
  },
  postTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
