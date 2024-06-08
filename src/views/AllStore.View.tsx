import {View, Text, StyleSheet, Pressable, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import {TypographyStyles} from 'theme/typography';
import {colors} from 'theme/colors';
import {Categories} from 'components/Categories';
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

export const AllStoreView: React.FC<AllStoreViewProps> = ({navigation}) => {
  const categories = ['All', 'Shoes', 'T-Shirt', 'Tops', 'Sinkers', 'Blues'];
  const [category, setCategory] = useState<string>(categories[0] ?? '');

  useEffect(() => {
    const id = setTimeout(() => {
      return productsArray;
    }, 2000);

    return () => clearTimeout(id);
  }, []);

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
        activeContainer={styles.activeContainer}
        activeText={styles.activeText}
        inActiveContainer={styles.inActiveContainer}
        inActiveText={styles.inActiveText}
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
  popular: {
    marginRight: normalize('horizontal', 16),
  },

  activeText: {color: colors.white},
  inActiveText: {
    color: colors.ink.base,
  },
  activeContainer: {backgroundColor: colors.primary.base},
  inActiveContainer: {backgroundColor: colors.sky.lightest},
});
