import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  buttonWrapper: {
    borderRadius: 8,
    overflow: "hidden",
  },
  button: {
    backgroundColor: "#333",
    height: 48,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonActive: {
    opacity: Platform.OS === "ios" ? 0.7 : 1,
  },
  buttonDisabled: {
    backgroundColor: "#ccc",
  },
  buttonLabel: {
    color: "#fff",
    fontWeight: "bold",
  },
  buttonLabelDisabled: {
    color: "#888",
  },
});
