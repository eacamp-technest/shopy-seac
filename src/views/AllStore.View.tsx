import {View, Text, StyleSheet, Pressable, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {TypographyStyles} from 'theme/typography';
import {colors} from 'theme/colors';
import {Categories} from 'components/Categories';
import {CommonStyles} from 'theme/common.styles';
import {normalize} from 'theme/metrics';
import {IProduct, productsArray} from 'mock/Products.Mock';
import {ProductsCart} from 'components/ProductsContainer';
import {FlashList} from '@shopify/flash-list';

const SectionHeader = (
  title: string,
  buttonName: string,
  onPress: () => void,
) => {
  return (
    <View style={styles.sectionHeader}>
      <Text style={styles.title}>{title}</Text>
      {
        <Pressable onPress={onPress}>
          <Text style={styles.buttonName}>{buttonName}</Text>
        </Pressable>
      }
    </View>
  );
};

export const AllStoreView = () => {
  const categories = ['All', 'Shoes', 'T-Shirt', 'Tops', 'Sinkers', 'Blues'];
  const [category, setCategory] = useState<string>(categories[0] ?? '');

  const renderItem = ({item}: {item: IProduct}) => {
    return (
      <ProductsCart
        style={styles.container}
        type="horizontal"
        image={item.image ?? ''}
        name={item.name ?? ''}
        price={`$${item.price}`}
        producer={item.producer ?? ''}
      />
    );
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      scrollEnabled={true}
      style={styles.root}>
      {SectionHeader('Categories', 'See all', () => {})}
      <Categories
        categories={categories}
        category={category}
        setCategory={setCategory}
      />
      <View style={styles.products}>
        <FlashList
          data={productsArray}
          estimatedItemSize={productsArray.length}
          numColumns={2}
          scrollEnabled={false}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          renderItem={renderItem}
        />
      </View>
      {SectionHeader('POPULAR PRODUCTS', 'See All', () => {})}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    marginHorizontal: normalize('horizontal', 24),
    marginTop: normalize('vertical', 28),
  },
  sectionHeader: {
    ...CommonStyles.alignCenterJustifyBetweenRow,
    marginBottom: normalize('vertical', 20),
  },
  title: {
    ...TypographyStyles.title3,
  },
  buttonName: {
    ...TypographyStyles.RegularTightSemiBold,
    color: colors.primary.base,
  },
  products: {
    marginVertical: normalize('vertical', 32),
  },
  container: {
    marginBottom: normalize('vertical', 16),
  },
});
