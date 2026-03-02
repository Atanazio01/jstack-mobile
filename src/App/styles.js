import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    flex: 1,
  },
  buttonsContainer: {
    gap: 16,
  },
  button: {
    backgroundColor: '#000',
    height: 48,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonLabel: {
    color: '#fff',
    fontWeight: 'bold',
  }
});