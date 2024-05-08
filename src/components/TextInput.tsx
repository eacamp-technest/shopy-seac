import {
  View,
  StyleSheet,
  TextInput,
  Text,
  Pressable,
  Keyboard,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {TypographyStyles} from 'theme/typography';
import {SvgImage} from './SvgImage';
import {colors} from 'theme/colors';
import {normalize} from 'theme/metrics';

interface ITextInput {
  placeholder: string;
  labelText?: string;
  captionText?: string;
  rightIcon?: NodeRequire;
  leftIcon?: NodeRequire;
  errorMessage?: string;
  onRightPressed?: () => void;
  onChangeText?: (value: string) => void;
}

export const CustomTextInput: React.FC<ITextInput> = ({
  onChangeText,
  onRightPressed,
  labelText,
  captionText,
  leftIcon,
  rightIcon,
  placeholder,
  errorMessage,
}) => {
  const [isFocus, changeFocus] = useState(false);

  useEffect(() => {
    const keyBoardId1 = Keyboard.addListener('keyboardDidShow', () => {
      changeFocus(true);
    });
    const keyBoardId2 = Keyboard.addListener('keyboardDidHide', () => {
      changeFocus(false);
    });

    return () => {
      keyBoardId1.remove();
      keyBoardId2.remove();
    };
  }, []);

  const getCaption = () => {
    if (errorMessage) {
      return <Text style={styles.errorMessage}>{errorMessage}</Text>;
    }

    if (captionText) {
      return <Text style={styles.caption}>{captionText}</Text>;
    }
  };

  return (
    <View>
      {labelText && (
        <Text style={[TypographyStyles.RegularNoneSemiBold, styles.label]}>
          {labelText}
        </Text>
      )}
      <View style={[isFocus ? styles.focusContainer : styles.container]}>
        {leftIcon && <SvgImage source={leftIcon} />}
        <TextInput
          onChangeText={onChangeText}
          placeholder={placeholder}
          style={[styles.textInput]}
        />
        {rightIcon && (
          <Pressable onPress={onRightPressed}>
            <SvgImage color={colors.ink.base} source={rightIcon} />
          </Pressable>
        )}
      </View>
      {getCaption()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: colors.sky.light,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: normalize('vertical', 8),
    justifyContent: 'space-between',
    paddingHorizontal: normalize('horizontal', 12),
  },
  focusContainer: {
    borderColor: colors.primary.base,
    borderWidth: 2,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: normalize('vertical', 8),
    justifyContent: 'space-between',
    paddingHorizontal: normalize('horizontal', 12),
  },
  textInput: {
    borderColor: 'transparent',
    flex: 1,
  },

  label: {
    marginBottom: normalize('vertical', 12),
    ...TypographyStyles.RegularNoneSemiBold,
  },
  caption: {
    marginTop: normalize('vertical', 12),
    ...TypographyStyles.SmallNormalRegular,
  },
  errorMessage: {
    ...TypographyStyles.SmallNormalRegular,
    marginTop: normalize('vertical', 12),
    color: colors.red.base,
  },
});
