import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    gap: 16,
    paddingHorizontal: 20,
    flex: 1,
  },
  contentContainer: {
    gap: 16,
  },
  postContainer: {
    backgroundColor: "#333",
    borderRadius: 8,
    height: 64,
    justifyContent: "center",
    alignItems: "center",
  },
  postTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  modalOverlay: {
    backgroundColor: 'rgba(255, 0, 0, 0.7)',
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  modalContainer: {
    backgroundColor: "#fff",
    padding: 24,
    borderRadius: 8,
  },
});
