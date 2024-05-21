import {StyleSheet, ScrollView, View, Text} from 'react-native';
import React, {useRef, useState} from 'react';
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
import BottomSheet, {IBottomSheetRef} from 'components/BottomSheet';
import {TypographyStyles} from 'theme/typography';
import {Button} from 'components/Button';
import {CustomCheckBox} from 'components/CheckBox';

export const PopularProductsScreen: React.FC<
  NativeStackScreenProps<NavigationParamList, Routes.popularProducts>
> = ({navigation}) => {
  const ref = useRef<IBottomSheetRef>(null);

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
          onRightPress={() => ref.current?.open()}
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
      <BottomSheet ref={ref}>
        <View style={styles.bottomSheetBody}>
          <Text style={styles.text}>Sort By</Text>
          <Text style={styles.checkBoxText}>Lowest Price</Text>
          <Text style={styles.checkBoxText}>Relevance</Text>
          <CustomCheckBox />
        </View>
        <Button text="Apply" onPress={() => ref.current?.close()} />
      </BottomSheet>
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
  text: {
    ...TypographyStyles.title3,
    color: 'black',
  },
  checkBoxText: {
    ...TypographyStyles.RegularTightRegular,
    color: colors.ink.darkest,
  },
  bottomSheetBody: {
    gap: normalize('vertical', 15),
    marginBottom: normalize('vertical', 43.6),
  },
});
