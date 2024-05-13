import {View, StyleSheet, TextInput} from 'react-native';
import React, {RefObject, useState} from 'react';
import {colors} from 'theme/colors';
import {TypographyStyles} from 'theme/typography';
import {normalize} from 'theme/metrics';

interface IOTP {
  codes: Array<string>;
  refs: RefObject<TextInput>[];
  onChangeCode: (text: string, index: number) => void;
}

export const OtpInput: React.FC<IOTP> = ({codes, refs, onChangeCode}) => {
  const [focusIndex, handleFocus] = useState<number | null>(null);

  const renderInputs = () => {
    return codes.map((code, index) => {
      return (
        <View
          key={index}
          style={[styles.wrapper, focusIndex === index && styles.focusWrapper]}>
          <TextInput
            key={index}
            keyboardType="number-pad"
            textAlign="center"
            style={[styles.input]}
            ref={refs[index]}
            onFocus={() => handleFocus(index)}
            onBlur={() => handleFocus}
            maxLength={1}
            onKeyPress={({nativeEvent: {key: keyValue}}) => {
              if (keyValue === 'Backspace') {
                refs[index - 1]?.current?.focus();
              }
            }}
            onChangeText={value => {
              if (value.length === 1) {
                refs[index + 1]?.current?.focus();
              }

              onChangeCode(value, index);
            }}
          />
        </View>
      );
    });
  };

  return <View style={styles.root}>{renderInputs()}</View>;
};

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: normalize('vertical', 16),
  },
  focusWrapper: {
    borderColor: colors.primary.base,
    borderWidth: 2,
  },
  wrapper: {
    height: normalize('vertical', 48),
    width: normalize('vertical', 48),
    borderColor: colors.sky.light,
    borderWidth: 2,
    alignItems: 'center',
    borderRadius: normalize('vertical', 8),
  },
  input: {
    height: '100%',
    ...TypographyStyles.RegularNoneBold,
  },
});
