import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {FlashList} from '@shopify/flash-list';
import {Navbar} from 'components/Navbar';
import {ProductsCart} from 'components/ProductsContainer';
import {IProduct, productsArray} from 'mock/Products.Mock';
import React from 'react';
import {
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Routes} from 'router/routes';
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

type ItemListScreenProb = NativeStackScreenProps<
  NavigationParamList,
  Routes.itemList
>;

export const ItemListScreen: React.FC<ItemListScreenProb> = ({navigation}) => {
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
        title="Filter"
        left={vectors.leftChevron}
        leftActionType="icon"
        rightActionType="icon"
      />
      <HeaderRow left="Brand" right="See All" onRight={() => {}} />
      <View
        style={{
          height: 94,
          backgroundColor: colors.primary.light,
          marginVertical: 40,
        }}
      />
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
