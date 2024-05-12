import {StyleSheet, Text, View} from 'react-native';
import React, {useRef, useState} from 'react';
import {SvgImage} from 'components/SvgImage';
import {colors} from 'theme/colors';
import {TypographyStyles} from 'theme/typography';
import {Button} from 'components/Button';
import {Dialog} from 'components/Dialog';
import {OtpInput} from 'components/OtpInput';

export const VerificationScreen = () => {
  const [visible, setVisible] = useState<boolean>(false);

  const code = '1234';

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
      <OtpInput codes={code} refs={refs} />
      <Text style={styles.subtitle}>Didn’t receive code? Resend Code</Text>
      <Button text="Continue" onPress={() => setVisible(true)} />
      <Dialog
        type="confirmation"
        isVisible={visible}
        subtitle="I agree to the Terms of Service and Conditions of Use including consent to electronic communications and I affirm that the information provided is my own."
        primaryButtonText="Agree and continue"
        transparentButtonText="Disagree and close"
        onPrimary={() => {}}
        onTransparent={() => {
          setVisible(false);
        }}
      />
    </View>
  );
};

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
