import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {CustomTextInput} from 'components/TextInput';

export const WelcomeScreen = () => {
  const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const [errorMessage, setError] = useState('');
  const error = (email: string) => {
    if (emailRegex.test(email) || email.length === 0) {
      setError('');
    } else {
      setError('Invalid email');
    }
  };
  return (
    <View style={styles.root}>
      <CustomTextInput
        placeholder="Email"
        labelText="Text Label"
        errorMessage={errorMessage}
        leftIcon={require('../../assets/vectors/map-pin.svg')}
        rightIcon={require('../../assets/vectors/chevron-down.svg')}
        onChangeText={value => {
          error(value);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
