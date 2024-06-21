import {View, Text, StyleSheet, Pressable, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import {TypographyStyles} from 'theme/typography';
import {colors} from 'theme/colors';
import {CommonStyles} from 'theme/common.styles';
import {normalize} from 'theme/metrics';
import {IProduct, popularProducts, productsArray} from 'mock/Products.Mock';
import {ProductsCart} from 'components/ProductsContainer';
import {FlashList} from '@shopify/flash-list';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {NavigationParamList} from 'types/navigation.types';
import {Routes} from 'router/routes';

type AllStoreViewProps = {
  navigation: NativeStackNavigationProp<NavigationParamList, Routes.home>;
};

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

const renderPopular = ({item}: {item: IProduct}) => {
  return (
    <ProductsCart
      style={styles.popular}
      type="vertical"
      onPressed={() => console.log('Popular products')}
      image={item.image ?? ''}
      name={item.name ?? ''}
      price={`$${item.price}`}
      producer={item.producer ?? ''}
    />
  );
};

export const AllStoreView: React.FC<AllStoreViewProps> = ({navigation}) => {
  const categories = ['All', 'Shoes', 'T-Shirt', 'Tops', 'Sinkers', 'Blues'];
  const [category, setCategory] = useState<string>('');

  const renderCategories = ({item}: {item: string}) => {
    const isSelected = item === category && styles.activeContainer;
    return (
      <Pressable
        style={[styles.inactiveContainer, isSelected && styles.activeContainer]}
        onPress={() => setCategory(item)}>
        <Text style={[styles.inActiveText, isSelected && styles.activeText]}>
          {item}
        </Text>
      </Pressable>
    );
  };
  useEffect(() => {
    const id = setTimeout(() => {
      return productsArray;
    }, 2000);

    return () => clearTimeout(id);
  }, []);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      scrollEnabled={true}
      style={styles.root}>
      {SectionHeader('Categories', 'See all', () => {})}
      <FlashList
        data={categories}
        estimatedItemSize={50}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        renderItem={renderCategories}
      />
      <View style={styles.products}>
        <FlashList
          data={productsArray}
          estimatedItemSize={productsArray.length}
          estimatedListSize={{height: 217, width: 156}}
          keyExtractor={item => item.id!}
          numColumns={2}
          scrollEnabled={false}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          renderItem={renderItem}
        />
      </View>
      {SectionHeader('POPULAR PRODUCTS', 'See All', () => {
        navigation.navigate(Routes.popularProducts);
      })}
      <FlashList
        data={popularProducts}
        estimatedItemSize={popularProducts.length}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        renderItem={renderPopular}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  activeContainer: {
    backgroundColor: colors.primary.base,
  },
  inactiveContainer: {
    backgroundColor: colors.sky.lightest,
    paddingHorizontal: normalize('horizontal', 16),
    paddingVertical: normalize('vertical', 8),
    borderRadius: normalize('vertical', 100),
    marginRight: normalize('horizontal', 10),
  },
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
  popular: {
    marginRight: normalize('horizontal', 16),
  },

  activeText: {...TypographyStyles.RegularNoneRegular, color: colors.white},
  inActiveText: {
    color: colors.ink.base,
    ...TypographyStyles.RegularNoneRegular,
  },
});
