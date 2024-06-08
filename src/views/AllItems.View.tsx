/* eslint-disable react/no-unstable-nested-components */
import {View, StyleSheet} from 'react-native';
import React from 'react';
import {colors} from 'theme/colors';
import {FlashList} from '@shopify/flash-list';
import {ProductsCart} from 'components/ProductsContainer';
import {IProduct, popularProducts} from 'mock/Products.Mock';

const renderPopular = ({item}: {item: IProduct}) => {
  return (
    <ProductsCart
      type="vertical"
      hasActions
      onPressed={() => console.log('Popular products')}
      image={item.image ?? ''}
      name={item.name ?? ''}
      price={`$${item.price}`}
      producer={item.producer ?? ''}
    />
  );
};

export const AllItemsView = () => {
  return (
    <View style={styles.root}>
      <FlashList
        data={popularProducts}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        showsVerticalScrollIndicator={false}
        estimatedItemSize={popularProducts.length}
        renderItem={renderPopular}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: colors.white,
    marginHorizontal: 24,
    marginTop: 32,
    flex: 1,
  },
  separator: {
    marginBottom: 24,
  },
});
