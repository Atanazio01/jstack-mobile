import { TextInput } from "react-native";
import { styles } from "./styles";
import { useState, forwardRef } from "react";

/**
 *
 * @type {React.FC<import('react-native').TextInputProps>}
 */

export const TextArea = forwardRef((props, ref) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <>
      <TextInput
        ref={ref}
        style={[styles.textArea, isFocused && styles.textAreaFocused]}
        placeholderTextColor="#aaa"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        textAlignVertical="top" // android only
        {...props}
        multiline
      />
    </>
  );
});
