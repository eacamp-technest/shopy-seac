import {
  View,
  StyleSheet,
  TextInput,
  Text,
  Pressable,
  Keyboard,
  KeyboardTypeOptions,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {TypographyStyles} from 'theme/typography';
import {SvgImage} from './SvgImage';
import {colors} from 'theme/colors';
import {normalize} from 'theme/metrics';
import {CommonStyles} from 'theme/common.styles';

interface ITextInput {
  placeholder: string;
  labelText?: string;
  captionText?: string;
  rightIcon?: NodeRequire;
  leftIcon?: NodeRequire;
  secureText?: boolean;
  errorMessage?: string;
  keyboardType?: KeyboardTypeOptions;
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
  keyboardType,
  secureText = false,
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
          numberOfLines={1}
          secureTextEntry={secureText}
          placeholder={placeholder}
          style={[styles.textInput]}
          keyboardType={keyboardType}
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
    ...CommonStyles.alignCenterJustifyBetweenRow,
    borderRadius: normalize('vertical', 8),
    paddingHorizontal: normalize('horizontal', 12),
  },
  focusContainer: {
    ...CommonStyles.alignCenterJustifyBetweenRow,
    borderColor: colors.primary.base,
    borderWidth: 2,
    borderRadius: normalize('vertical', 8),
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
