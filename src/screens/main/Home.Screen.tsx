import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {colors} from 'theme/colors';
import {Button} from 'components/Button';

export const HomeScreen = () => {
  return (
    <View style={styles.root}>
      <Text>HomeScreen</Text>
      <Button text="Go to" onPress={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: 'black',
    flex: 1,
  },
});
