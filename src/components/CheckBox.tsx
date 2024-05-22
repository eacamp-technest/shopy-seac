import {View, StyleSheet, Text} from 'react-native';
import React from 'react';
import CheckBox from '@react-native-community/checkbox';
import {colors} from 'theme/colors';
import {normalize} from 'theme/metrics';
import {TypographyStyles} from 'theme/typography';

interface ICheckBox {
  title?: string;
  isSelected: boolean;
  setSelection: (value: boolean) => void;
}

export const CustomCheckBox: React.FC<ICheckBox> = ({
  isSelected,
  setSelection,
  title,
}) => {
  return (
    <View style={styles.root}>
      {title ? <Text style={styles.checkBoxText}>{title}</Text> : null}
      <View style={[styles.unchecked]}>
        <CheckBox
          tintColors={{true: colors.blue.base, false: colors.white}}
          disabled={false}
          value={isSelected}
          style={styles.checked}
          onValueChange={newValue => setSelection(newValue)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
  },
  unchecked: {
    borderWidth: 1,
    borderColor: colors.sky.base,
    width: normalize('width', 25),
    height: normalize('width', 25),
    borderRadius: normalize('vertical', 4),
    alignItems: 'center',
    justifyContent: 'center',
  },

  checked: {
    transform: [{scaleX: 1.3}, {scaleY: 1.3}],
  },

  checkBoxText: {
    ...TypographyStyles.RegularTightRegular,
    color: colors.ink.darkest,
  },
});
