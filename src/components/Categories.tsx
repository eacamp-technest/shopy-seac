import {View, Text, StyleSheet, Pressable} from 'react-native';
import React from 'react';
import {FlashList} from '@shopify/flash-list';
import {colors} from 'theme/colors';
import {TypographyStyles} from 'theme/typography';
import {normalize} from 'theme/metrics';

interface ICategories {
  categories: Array<string>;
  category: string;
  setCategory: (value: string) => void;
}

export const Categories: React.FC<ICategories> = ({
  categories,
  category,
  setCategory,
}) => {
  const handleCategoryPress = (item: string) => setCategory(item);

  const renderItem = ({item}: {item: string}) => {
    const isSelected = category === item;

    return (
      <Pressable onPress={() => handleCategoryPress(item)}>
        <View style={[styles.container, isSelected && styles.pressedContainer]}>
          <Text
            style={[styles.category, isSelected && styles.selectedCategory]}>
            {item}
          </Text>
        </View>
      </Pressable>
    );
  };

  return (
    <View style={styles.root}>
      <FlashList
        data={categories}
        estimatedItemSize={categories.length}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {},
  container: {
    backgroundColor: colors.sky.lightest,
    paddingHorizontal: normalize('horizontal', 16),
    paddingVertical: normalize('vertical', 8),
    borderRadius: normalize('vertical', 100),
    marginRight: normalize('horizontal', 10),
  },
  category: {
    ...TypographyStyles.RegularNoneRegular,
    color: colors.ink.base,
  },
  selectedCategory: {
    color: colors.white,
  },
  pressedContainer: {
    backgroundColor: colors.primary.base,
  },
});
