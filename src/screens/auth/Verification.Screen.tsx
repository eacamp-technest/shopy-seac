import {StyleSheet, Text, View} from 'react-native';
import React, {useRef, useState} from 'react';
import {SvgImage} from 'components/SvgImage';
import {colors} from 'theme/colors';
import {TypographyStyles} from 'theme/typography';
import {Button} from 'components/Button';
import {Dialog} from 'components/Dialog';
import {OtpInput} from 'components/OtpInput';
import {TextLink} from 'components/TextLink';

export const VerificationScreen = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const [otp, setOtp] = useState<string>('');
  const [codes, setCodes] = useState<string[] | undefined>(Array(4).fill(''));

  const refs = [
    useRef<any>(null),
    useRef<any>(null),
    useRef<any>(null),
    useRef<any>(null),
  ];

  return (
    <View style={styles.root}>
      <SvgImage
        width={24}
        height={24}
        color={colors.ink.darkest}
        source={require('../../assets/vectors/chevron-left.svg')}
      />

      <Text style={styles.title}>ENTER SMS CODE</Text>
      <OtpInput
        codes={codes!}
        refs={refs}
        onChangeCode={(text, index) => {
          const newCodes = [...codes!];
          newCodes[index] = text;
          setCodes(newCodes);
          setOtp(newCodes.join(''));
        }}
      />
      <TextLink
        style={styles.subtitle}
        content="Didn’t receive code? Resend Code"
        highlighted={highlighted}
        center
      />
      <Button text="Continue" onPress={() => setVisible(true)} />
      <Dialog
        type="confirmation"
        isVisible={visible}
        subtitle={
          <TextLink
            highlighted={highlightedTerms}
            content="I agree to the Terms of Service and Conditions of Use including consent to electronic communications and I affirm that the information provided is my own"
          />
        }
        primaryButtonText="Agree and continue"
        transparentButtonText="Disagree and close"
        onPrimary={() => {
          console.log('My otp code', otp);
        }}
        onTransparent={() => {
          setVisible(false);
        }}
      />
    </View>
  );
};

const highlighted = [
  {
    text: 'Resend',
    callback: () => console.log('terns'),
  },
  {
    text: 'Code',
    callback: () => console.log('conditions'),
  },
];

const highlightedTerms = [
  {
    text: 'Terms',
    callback: () => console.log('terns'),
  },
  {
    text: 'of',
    callback: () => console.log('conditions'),
  },
  {
    text: 'Service',
    callback: () => console.log('conditions'),
  },
  {
    text: 'and',
    callback: () => console.log('conditions'),
  },
  {
    text: 'Conditions',
    callback: () => console.log('conditions'),
  },
];

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  title: {
    ...TypographyStyles.title2,
    marginTop: 16,
  },
  subtitle: {
    marginTop: 16,
    marginBottom: 32,
    alignSelf: 'center',
  },
});
