import {
  View,
  Text,
  StyleSheet,
  TextInput,
  KeyboardTypeOptions,
  StyleProp,
  ViewStyle,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';
import {SvgImage} from './SvgImage';
import {TypographyStyles} from 'theme/typography';
import {colors} from 'theme/colors';
import {standardHitSlopSize} from 'theme/consts.styles';
import {CommonStyles} from 'theme/common.styles';

type TIcon = {
  source: NodeRequire;
  color?: string;
  width?: number;
  height?: number;
  position?: 'left' | 'right';
};

export interface IInput {
  type?: 'text' | 'phone' | 'password' | 'select';
  label?: string;
  caption?: string;
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  keyboardType?: KeyboardTypeOptions;
  icon?: TIcon | NodeRequire;
  errorMessage?: string;
  style?: StyleProp<ViewStyle>;
  setValue?: (value: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
}

export const Input: React.FC<IInput> = ({
  value,
  type = 'text',
  setValue,
  icon,
  ...props
}) => {
  const [focused, setFocused] = useState<boolean>(false);
  const [secureTextEntry, setSecureTextEntry] = useState<boolean>(
    type === 'password',
  );

  const isMoreIcon =
    ('position' in (icon ?? {}) && (icon as TIcon)?.position === 'right') ||
    type === 'password';

  const renderIcon = () => {
    if (type === 'password') {
      return (
        <Pressable hitSlop={standardHitSlopSize}>
          <SvgImage
            source={
              secureTextEntry
                ? require('../assets/vectors/eye_off.svg')
                : require('../assets/vectors/eye.svg')
            }
            color={colors.ink.base}
            width={24}
            height={24}
            onPress={() => setSecureTextEntry(state => !state)}
          />
        </Pressable>
      );
    }

    if (!icon) {
      return null;
    }

    if ('source' in icon) {
      return (
        <SvgImage
          source={icon.source}
          width={icon.width}
          color={icon.color}
          height={icon.height}
        />
      );
    }

    return (
      <SvgImage
        source={icon}
        color={props.disabled ? colors.sky.base : colors.ink.base}
      />
    );
  };

  const handleOnFocused = () => {
    setFocused(true);
    props?.onFocus?.();
  };
  const handleOnBlur = () => {
    setFocused(false);
    props?.onBlur?.();
  };

  return (
    <View style={[styles.root, props?.style]}>
      {props.label ? (
        <Text style={TypographyStyles.RegularNoneSemiBold}>{props.label}</Text>
      ) : null}
      <View
        style={[
          styles.wrapper,
          focused && styles.focused,
          props.disabled && styles.wrapperDisabled,
          isMoreIcon && CommonStyles.rowReverse,
        ]}>
        {renderIcon()}
        <TextInput
          placeholder={props.placeholder}
          keyboardType={props.keyboardType}
          value={value}
          onFocus={handleOnFocused}
          onBlur={handleOnBlur}
          autoCapitalize="none"
          editable={!props.disabled}
          secureTextEntry={secureTextEntry}
          onChangeText={setValue}
          placeholderTextColor={
            props.disabled ? colors.sky.base : colors.ink.lighter
          }
          style={styles.input}
        />
      </View>
      {props.caption || props.errorMessage ? (
        <Text
          style={[
            styles.caption,
            props?.errorMessage ? styles.error : undefined,
          ]}>
          {props.errorMessage ?? props.caption}
        </Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    gap: 12,
  },
  focused: {
    borderWidth: 2,
    borderColor: colors.primary.base,
  },
  wrapperDisabled: {
    backgroundColor: colors.sky.lighter,
    borderColor: colors.sky.lighter,
    color: colors.sky.base,
  },
  error: {
    color: colors.primary.base,
  },
  caption: {
    ...TypographyStyles.SmallNormalRegular,
    color: colors.ink.lighter,
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.sky.light,
    borderRadius: 8,
    paddingHorizontal: 16,
    gap: 12,
    height: 48,
  },
  input: {
    height: '100%',
    flex: 1,
    flexGrow: 1,
    borderColor: 'red',
    ...TypographyStyles.RegularNoneRegular,
  },
});