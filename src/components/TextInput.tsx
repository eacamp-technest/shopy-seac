import {
  View,
  StyleSheet,
  TextInput,
  Text,
  Pressable,
  KeyboardTypeOptions,
  StyleProp,
  ViewStyle,
} from 'react-native';
import React, {useState} from 'react';
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
  disabled?: boolean;
  secureText?: boolean;
  errorMessage?: string;
  style?: StyleProp<ViewStyle>;
  value?: string;
  setValue?: (value: string) => void;
  keyboardType?: KeyboardTypeOptions;
  onRightPressed?: () => void;
}

export const CustomTextInput: React.FC<ITextInput> = ({
  onRightPressed,
  labelText,
  captionText,
  leftIcon,
  rightIcon,
  placeholder,
  errorMessage,
  keyboardType,
  secureText = false,
  value,
  setValue,
  disabled,
  style,
}) => {
  const [isFocus, changeFocus] = useState(false);

  const getCaption = () => {
    if (errorMessage) {
      return <Text style={styles.errorMessage}>{errorMessage}</Text>;
    }

    if (captionText) {
      return <Text style={styles.caption}>{captionText}</Text>;
    }
  };

  const onFocus = () => changeFocus(true);
  const onBlur = () => changeFocus(false);
  return (
    <View style={style}>
      {labelText && (
        <Text style={[TypographyStyles.RegularNoneSemiBold, styles.label]}>
          {labelText}
        </Text>
      )}
      <View
        style={[
          styles.container,
          isFocus && styles.focusContainer,
          disabled && styles.disabled,
        ]}>
        {leftIcon && <SvgImage source={leftIcon} />}
        <TextInput
          onChangeText={setValue}
          numberOfLines={1}
          value={value}
          secureTextEntry={secureText}
          placeholder={placeholder}
          style={[styles.textInput]}
          keyboardType={keyboardType}
          onFocus={onFocus}
          onBlur={onBlur}
          editable={!disabled}
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
    height: 48,
    width: '100%',
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
    height: '100%',
    flex: 1,
    flexGrow: 1,
  },
  disabled: {
    backgroundColor: colors.sky.lighter,
    borderColor: colors.sky.lighter,
    color: colors.sky.base,
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
