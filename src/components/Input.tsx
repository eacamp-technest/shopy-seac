import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

interface CustomInputProps {
  placeholder: string;
}

const CustomInput: React.FC<CustomInputProps> = ({ placeholder }) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      placeholderTextColor="#000" 
    />
  );
};

const styles = StyleSheet.create({
  input: {
    width: 327, 
    height: 48, 
    borderRadius: 8,
    borderWidth: 1, 
    borderColor: '#000',
    padding: 10, 
    fontSize: 16, 
    color: '#000',
  }
});

export default CustomInput;
