import {
  View,
  Text,
  StyleSheet,
  Modal,
  Image,
  ImageRequireSource,
} from 'react-native';
import React from 'react';
import {colors} from 'theme/colors';
import {CommonStyles} from 'theme/common.styles';
import {TypographyStyles} from 'theme/typography';
import {Button} from './Button';
import {CustomTextInput} from './TextInput';
import {normalize} from 'theme/metrics';

type TDialog = 'confirmation' | 'alert' | 'prompt' | 'notification';
type TImage = 'none' | 'illustrated';
type TSize = 'small' | 'middle' | 'large';
type TSource = string | ImageRequireSource;

interface IDialog {
  type?: TDialog;
  image?: TImage;
  size?: TSize;
  title?: string;
  subtitle?: string;
  isVisible?: boolean;
  content?: string;
  inputValue?: string;
  source?: TSource;
  placeholder?: string;
  primaryButtonText?: string;
  transparentButtonText?: string;
  setValue?: (value: string) => void;
  onVisible?: () => void;
  onPrimary?: () => void;
  onTransparent?: () => void;
}

export const Dialog: React.FC<IDialog> = ({
  isVisible = false,
  title,
  subtitle,
  type,
  content,
  onPrimary: onConfirm,
  onTransparent: onCancel,
  inputValue,
  setValue,
  source,
  image,
  size,
  placeholder,
  primaryButtonText: primaryText,
  transparentButtonText: transparentText,
}) => {
  const getButton = () => {
    if (type === 'confirmation' || type === 'prompt') {
      return (
        <Button
          type="transparent"
          text={transparentText ?? ''}
          onPress={onCancel}
        />
      );
    }
  };

  const getImage = () => {
    if (typeof source === 'string') {
      return (
        <Image
          source={{uri: source}}
          style={[styles[size!], size !== 'large' && styles.image]}
        />
      );
    }
    return (
      <Image
        style={[styles[size!], size !== 'large' && styles.image]}
        source={source}
      />
    );
  };

  return (
    <Modal animationType="slide" transparent={true} visible={isVisible}>
      <View style={styles.centeredView}>
        <View style={[styles.modalView]}>
          {image === 'illustrated' && getImage()}
          <View style={styles.body}>
            {title && <Text style={styles.title}>{title}</Text>}
            {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
            {type === 'prompt' && (
              <CustomTextInput
                style={styles.input}
                setValue={setValue}
                value={inputValue}
                placeholder={placeholder ?? ''}
              />
            )}
            {type !== 'notification' && (
              <Button
                style={styles.primaryButton}
                type="primary"
                text={primaryText ?? ''}
                onPress={onConfirm}
              />
            )}
            {getButton()}
            {type === 'notification' && (
              <Text style={styles.content}>{content}</Text>
            )}
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    justifyContent: 'center',
    flex: 1,
    marginTop: normalize('vertical', 22),
  },
  body: {
    width: '100%',
    padding: normalize('vertical', 24),
  },
  modalView: {
    borderRadius: normalize('vertical', 16),
    ...CommonStyles.alignJustifyCenter,
    backgroundColor: colors.white,
    elevation: 3,
    margin: normalize('horizontal', 24),
  },
  padding: {},
  title: {
    ...TypographyStyles.title3,
    textAlign: 'center',
    marginBottom: normalize('vertical', 10),
  },
  subtitle: {
    ...TypographyStyles.RegularNoneSemiBold,
    color: colors.ink.lighter,
    textAlign: 'center',
  },
  primaryButton: {
    marginTop: normalize('vertical', 24),
    marginBottom: normalize('vertical', 12),
  },
  content: {
    ...TypographyStyles.RegularNormalSemiBold,
    color: colors.ink.lighter,
  },
  input: {
    marginTop: normalize('vertical', 24),
  },
  small: {
    width: normalize('width', 64),
    height: normalize('width', 64),
    borderRadius: 16,
    resizeMode: 'cover',
  },
  middle: {
    width: normalize('width', 120),
    height: normalize('width', 120),
    borderRadius: normalize('vertical', 16),
    resizeMode: 'cover',
  },
  large: {
    width: '100%',
    height: normalize('height', 186),
    borderTopLeftRadius: normalize('vertical', 16),
    borderTopRightRadius: normalize('vertical', 16),
    resizeMode: 'cover',
  },
  image: {
    marginTop: normalize('vertical', 24),
  },
});
