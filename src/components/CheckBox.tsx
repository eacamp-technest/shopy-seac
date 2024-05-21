import {View, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import CheckBox from '@react-native-community/checkbox';
import {colors} from 'theme/colors';

export const CustomCheckBox = () => {
  const [isSelected, setSelection] = useState<boolean>(false);
  return (
    <View style={[styles.root]}>
      <CheckBox
        tintColors={{true: colors.blue.base, false: colors.white}}
        disabled={false}
        value={isSelected}
        onValueChange={newValue => setSelection(newValue)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {},
  checked: {},
  unchecked: {},
});
