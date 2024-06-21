/* import {
  View,
  Text,
  StyleSheet,
  Pressable,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';
import React from 'react';
import {FlashList} from '@shopify/flash-list';
import {TypographyStyles} from 'theme/typography';
import {normalize} from 'theme/metrics';

interface ICategories {
  categories: Array<string>;
  onPressed: () => void;
  isSelected: boolean;
  inActiveContainer?: StyleProp<ViewStyle>;
  inActiveText?: StyleProp<TextStyle>;
  activeText?: StyleProp<TextStyle>;
  activeContainer?: StyleProp<ViewStyle>;
}

export const Categories: React.FC<ICategories> = ({
  categories,
  inActiveContainer: inActiveStyle,
  activeContainer: activeStyle,
  activeText: activeTextStyle,
  inActiveText: inActiveTextStyle,
  isSelected,
}) => {
  const renderItem = ({item}: {item: string}) => {
    return (
      <Pressable
        onPress={() => {
          console.log(item);
        }}>
        <View
          style={[styles.container, inActiveStyle, isSelected && activeStyle]}>
          <Text
            style={[
              styles.category,
              inActiveTextStyle,
              isSelected && activeTextStyle,
            ]}>
            {item}
          </Text>
        </View>
      </Pressable>
    );
  };

  return (
    <FlashList
      data={categories}
      estimatedItemSize={categories.length}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      horizontal={true}
      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: normalize('horizontal', 16),
    paddingVertical: normalize('vertical', 8),
    borderRadius: normalize('vertical', 100),
    marginRight: normalize('horizontal', 10),
  },
  category: {
    ...TypographyStyles.RegularNoneRegular,
  },
});
 */
