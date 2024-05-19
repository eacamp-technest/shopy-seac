import {StyleSheet, ScrollView, View} from 'react-native';
import React, {useState} from 'react';
import {Navbar} from 'components/Navbar';
import {colors} from 'theme/colors';
import {Categories} from 'components/Categories';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {NavigationParamList} from 'types/navigation.types';
import {Routes} from 'router/routes';
import {normalize} from 'theme/metrics';
import {FlashList} from '@shopify/flash-list';
import {IProduct, productsArray} from 'mock/Products.Mock';
import {ProductsCart} from 'components/ProductsContainer';

export const PopularProductsScreen: React.FC<
  NativeStackScreenProps<NavigationParamList, Routes.popularProducts>
> = ({navigation}) => {
  const categories = ['All', 'Shoes', 'T-Shirt', 'Tops', 'Sinkers', 'Blues'];
  const [category, setCategory] = useState<string>(categories[0] ?? '');

  const renderItem = ({item}: {item: IProduct}) => {
    return (
      <ProductsCart
        style={styles.cart}
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
      scrollEnabled={true}
      contentContainerStyle={styles.contentContainerStyle}>
      <View style={styles.header}>
        <Navbar
          type="standard"
          titleStyle={styles.title}
          left={vectors.chevronLeft}
          leftActionType="icon"
          onLeftPress={() => navigation.goBack()}
          onRightPress={() => console.log('Right pressed')}
          right={vectors.slider}
          rightActionType="icon"
          title="Most Popular"
        />
        <Categories
          categories={categories}
          category={category}
          setCategory={setCategory}
          inActiveText={styles.buttonText}
          inActiveContainer={styles.inActiveContainer}
          activeContainer={styles.activeContainer}
          activeText={styles.buttonText}
        />
      </View>
      <View style={styles.body}>
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
    </ScrollView>
  );
};

const vectors = {
  chevronLeft: {
    color: colors.white,
    height: normalize('vertical', 24),
    width: normalize('vertical', 24),
    icon: require('../../assets/vectors/chevron-left.svg'),
  },
  slider: {
    color: colors.white,
    height: normalize('vertical', 24),
    width: normalize('vertical', 24),
    icon: require('../../assets/vectors/sliders.svg'),
  },
};

const styles = StyleSheet.create({
  buttonText: {color: colors.white},
  activeContainer: {backgroundColor: colors.primary.base},
  inActiveContainer: {backgroundColor: colors.bdazzledBlue.base},
  body: {
    bottom: normalize('vertical', 70),
    marginHorizontal: normalize('horizontal', 20),
    height: '78%',
  },
  header: {
    backgroundColor: colors.bdazzledBlue.darkest,
    paddingHorizontal: normalize('vertical', 18),
    paddingBottom: normalize('vertical', 120),
    gap: normalize('vertical', 30),
  },
  contentContainerStyle: {
    flex: 1,
    position: 'absolute',
  },
  title: {
    color: colors.white,
  },
  cart: {
    marginBottom: normalize('vertical', 24),
  },
});
