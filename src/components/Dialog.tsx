import {View, Text, StyleSheet, Modal} from 'react-native';
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

interface IDialog {
  type?: TDialog;
  image?: TImage;
  size?: TSize;
  title?: string;
  subtitle?: string;
  isVisible?: boolean;
  content?: string;
  inputValue?: string;
  setValue?: (value: string) => void;
  onVisible?: () => void;
  onConfirm?: () => void;
  onCancel?: () => void;
}

export const Dialog: React.FC<IDialog> = ({
  isVisible = false,
  title,
  subtitle,
  type,
  content,
  onConfirm,
  onCancel,
  inputValue,
  setValue,
}) => {
  const getButton = () => {
    if (type === 'confirmation' || type === 'prompt') {
      return <Button type="transparent" text="No thanks" onPress={onCancel} />;
    }
  };

  return (
    <Modal animationType="slide" transparent={true} visible={isVisible}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
          {type === 'prompt' && (
            <CustomTextInput
              style={styles.input}
              setValue={setValue}
              value={inputValue}
              placeholder="Placeholder text"
            />
          )}
          {type !== 'notification' && (
            <Button
              style={styles.primaryButton}
              type="primary"
              text="Sure"
              onPress={onConfirm}
            />
          )}
          {getButton()}
          {type === 'notification' && (
            <Text style={styles.content}>{content}</Text>
          )}
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
  modalView: {
    borderRadius: normalize('vertical', 16),
    padding: normalize('vertical', 24),
    ...CommonStyles.alignJustifyCenter,
    backgroundColor: colors.white,
    elevation: 3,
    margin: normalize('horizontal', 24),
  },
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
});
