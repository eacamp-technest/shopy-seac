import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

// Define an interface for component props
interface CustomInputProps {
  placeholder: string;
}

const CustomInput: React.FC<CustomInputProps> = ({ placeholder }) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      placeholderTextColor="#000" // Adjust placeholder text color if needed
    />
  );
};

const styles = StyleSheet.create({
  input: {
    width: 327, // width in pixels
    height: 48, // height in pixels
    borderRadius: 8, // border radius in pixels
    borderWidth: 1, // border width in pixels
    borderColor: '#000', // border color, adjust as needed
    padding: 10, // inner padding in pixels
    fontSize: 16, // text size, adjust as needed
    color: '#000', // text color, adjust as needed
  }
});

export default CustomInput;
