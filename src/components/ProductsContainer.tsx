import {
  View,
  StyleSheet,
  Image,
  Text,
  Pressable,
  StyleProp,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {TypographyStyles} from 'theme/typography';
import {colors} from 'theme/colors';
import {normalize} from 'theme/metrics';
import {SvgImage} from './SvgImage';

type TType = 'horizontal' | 'vertical';

interface IProductCart {
  type: TType;
  image: string;
  hasActions?: boolean;
  name: string;
  price: string;
  producer: string;
  onPressed?: () => void;
  style?: StyleProp<ViewStyle>;
}

export const ProductsCart: React.FC<IProductCart> = ({
  image,
  name,
  producer,
  price,
  onPressed,
  style,
  type,
  hasActions,
}) => {
  return (
    <Pressable onPress={onPressed}>
      <View style={[type === 'vertical' && styles.verticalRoot, style]}>
        <Image
          style={[
            styles.largeImage,
            type === 'vertical' && styles.smallImage,
            hasActions && styles.actionImage,
          ]}
          source={{
            uri: image !== null ? image : '',
          }}
        />
        <View style={styles.horizontalRoot}>
          <Text numberOfLines={1} style={styles.name}>
            {name !== null ? name : ''}
          </Text>
          <Text numberOfLines={1} style={styles.price}>
            {price !== null ? price : ''}
          </Text>
          {type !== 'vertical' && (
            <Text numberOfLines={1} style={styles.producer}>
              {producer !== null ? producer : ''}
            </Text>
          )}
          {type === 'vertical' && hasActions && (
            <View style={styles.actions}>
              <Pressable style={styles.moveAction}>
                <Text style={styles.actionText}>Move to back</Text>
              </Pressable>
              <SvgImage
                source={require('../assets/vectors/heart.svg')}
                color={colors.red.light}
                height={normalize('width', 22)}
                width={normalize('width', 22)}
              />
            </View>
          )}
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  verticalRoot: {
    flexDirection: 'row',
    gap: normalize('vertical', 16),
  },
  horizontalRoot: {
    marginTop: normalize('horizontal', 8),
  },
  largeImage: {
    width: normalize('width', 156),
    height: normalize('height', 141),
    borderRadius: normalize('vertical', 8),
    resizeMode: 'cover',
  },
  smallImage: {
    width: normalize('width', 78),
    height: normalize('height', 78),
  },
  name: {
    ...TypographyStyles.RegularNoneSemiBold,
    color: colors.ink.base,
  },
  price: {
    ...TypographyStyles.TinyNormalBold,
    color: colors.ink.base,
  },
  producer: {
    ...TypographyStyles.TinyNormalRegular,
    color: colors.ink.lighter,
  },
  actionImage: {
    width: normalize('width', 100),
    height: normalize('height', 100),
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: normalize('vertical', 18),
    width: '80%',
  },
  moveAction: {
    backgroundColor: colors.sky.lightest,
    paddingHorizontal: normalize('horizontal', 16),
    paddingVertical: normalize('vertical', 7),
    borderRadius: normalize('vertical', 8),
  },
  actionText: {
    ...TypographyStyles.RegularNoneRegular,
    color: colors.ink.base,
  },
});
