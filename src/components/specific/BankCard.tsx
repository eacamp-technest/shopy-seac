import {StyleProp, StyleSheet, Text, View, ViewStyle} from 'react-native';
import React from 'react';
import {colors} from 'theme/colors';
import {normalize} from 'theme/metrics';
import {SvgImage} from 'components/SvgImage';
import {CommonStyles} from 'theme/common.styles';
import {TypographyStyles} from 'theme/typography';

interface IBackCard {
  holder?: string;
  cardNumber?: string;
  expiration?: string;
  empty?: boolean;
  style?: StyleProp<ViewStyle>;
}

const TextGenerator = ({
  title,
  subtitle,
  isRight,
}: {
  title: string;
  subtitle: string;
  isRight?: boolean;
}) => (
  <View style={styles.generator}>
    <Text style={styles.name}>{title.toUpperCase()}</Text>
    <Text style={[styles.subtitle, isRight && {textAlign: 'right'}]}>
      {subtitle}
    </Text>
  </View>
);

export const BankCard: React.FC<IBackCard> = ({
  cardNumber,
  expiration = '',
  holder = '',
  style,
  empty,
}) => {
  return (
    <View style={[styles.root, empty && styles.empty, style]}>
      <View style={CommonStyles.alignCenterJustifyBetweenRow}>
        <Text style={styles.title}>Universal Card</Text>
        <SvgImage source={vectors.mastercard} width={48} height={48} />
      </View>
      <Text style={styles.number}>{cardNumber}</Text>
      <View style={CommonStyles.alignCenterJustifyBetweenRow}>
        <TextGenerator title="card holder" subtitle={holder} />
        <TextGenerator title="card save" isRight subtitle={expiration} />
      </View>
    </View>
  );
};

const vectors = {
  mastercard: require('../../assets/social/mastercard.svg'),
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: colors.blue.base,
    borderRadius: 16,
    paddingHorizontal: normalize('horizontal', 24),
    paddingVertical: normalize('vertical', 16),
  },
  empty: {
    backgroundColor: 'rgba(3, 3, 3, 0.4)',
  },
  title: {
    ...TypographyStyles.RegularTightSemibold,
    color: colors.mellowApricot.lightest,
  },
  number: {
    ...TypographyStyles.title3,
    color: colors.mellowApricot.lightest,
    marginTop: normalize('vertical', 29),
    marginBottom: normalize('vertical', 16),
  },
  generator: {
    gap: normalize('vertical', 8),
  },
  name: {
    color: colors.mellowApricot.lightest,
    opacity: 0.5,
  },
  subtitle: {
    ...TypographyStyles.TinyNoneSemibold,
    color: colors.mellowApricot.lightest,
  },
});