import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {FlashList} from '@shopify/flash-list';
import {Navbar} from 'components/Navbar';
import {ProductsCart} from 'components/ProductsContainer';
import {IBrand, brands} from 'mock/Brands.Mock';
import {IProduct, productsArray} from 'mock/Products.Mock';
import React from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Routes} from 'router/routes';
import {useCategoryStore} from 'store/brand/brand.store';
import {colors} from 'theme/colors';
import {normalize} from 'theme/metrics';
import {TypographyStyles} from 'theme/typography';
import {NavigationParamList} from 'types/navigation.types';

interface IHeader {
  left: string;
  right: string;
  onRight: () => void;
}

const HeaderRow: React.FC<IHeader> = ({left, right, onRight}) => {
  return (
    <View style={styles.header}>
      <Text style={{...TypographyStyles.title3, color: colors.ink.base}}>
        {left}
      </Text>
      <Pressable onPress={onRight}>
        <Text
          style={{
            ...TypographyStyles.RegularTightSemiBold,
            color: colors.primary.base,
          }}>
          {right}
        </Text>
      </Pressable>
    </View>
  );
};

const renderItem = ({item}: {item: IProduct}) => {
  return (
    <ProductsCart
      style={styles.productCart}
      type="vertical"
      onPressed={() => console.log('Item ID', item.id)}
      image={item.image ?? ''}
      name={item.name ?? ''}
      price={`$${item.price}`}
      producer={item.producer ?? ''}
    />
  );
};

const renderBrands = ({item}: {item: IBrand}) => {
  return (
    <View style={styles.brandCart}>
      <Image style={styles.brandLogo} source={item.image} />
      <Text>{item.name}</Text>
    </View>
  );
};

type ItemListScreenProb = NativeStackScreenProps<
  NavigationParamList,
  Routes.itemList
>;

export const ItemListScreen: React.FC<ItemListScreenProb> = ({navigation}) => {
  const brandStore = useCategoryStore();
  return (
    <ScrollView
      scrollEnabled={true}
      style={styles.root}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.contentStyle}>
      <StatusBar backgroundColor={colors.white} barStyle="dark-content" />
      <Navbar
        right={vectors.filter}
        type="standard"
        onRightPress={() => {}}
        onLeftPress={() => navigation.goBack()}
        title={brandStore.category}
        left={vectors.leftChevron}
        leftActionType="icon"
        rightActionType="icon"
      />
      <HeaderRow left="Brand" right="See All" onRight={() => {}} />
      <View style={styles.brandsView}>
        <FlashList
          renderItem={renderBrands}
          data={brands}
          estimatedItemSize={brands.length}
          showsHorizontalScrollIndicator={false}
          horizontal
        />
      </View>
      <View style={styles.products}>
        <HeaderRow left="Product" right="See All" onRight={() => {}} />
        <FlashList
          data={productsArray}
          estimatedItemSize={productsArray.length}
          scrollEnabled={false}
          renderItem={renderItem}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {flex: 1, backgroundColor: colors.white},
  contentStyle: {
    marginHorizontal: normalize('horizontal', 24),
  },
  header: {flexDirection: 'row', justifyContent: 'space-between'},
  productCart: {
    marginBottom: normalize('horizontal', 24),
  },
  products: {
    gap: normalize('horizontal', 20),
  },
  brandsView: {
    marginVertical: normalize('vertical', 40),
  },
  brandLogo: {height: normalize('width', 70), width: normalize('width', 70)},
  brandCart: {
    alignItems: 'center',
    marginRight: normalize('horizontal', 16),
  },
  brandName: {...TypographyStyles.TinyNoneSemiBold},
});

const vectors = {
  filter: {
    icon: require('../../assets/vectors/filter.svg'),
    color: colors.black,
  },
  leftChevron: {
    icon: require('../../assets/vectors/chevron-left.svg'),
    color: colors.black,
  },
};
