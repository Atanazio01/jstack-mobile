import { TextInput } from "react-native";
import { styles } from "./styles";
import { useState } from "react";

/**
 *
 * @param {import('react-native').TextInputProps} props
 */

export function Input(props) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <>
      <TextInput
        style={[styles.input, isFocused && styles.inputFocused]}
        placeholderTextColor="#aaa"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        {...props}
      />
    </>
  );
}
