import {StyleSheet, View} from 'react-native';
import React from 'react';
import {CustomTextInput} from 'components/TextInput';

export const WelcomeScreen = () => {
  return (
    <View style={styles.root}>
      <CustomTextInput
        placeholder="Email"
        labelText="Text Label"
        leftIcon={require('../../assets/vectors/map-pin.svg')}
        rightIcon={require('../../assets/vectors/chevron-down.svg')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'white',
  },
});
