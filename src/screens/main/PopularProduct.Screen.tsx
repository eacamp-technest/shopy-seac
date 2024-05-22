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

type ScreenProb = NativeStackScreenProps<
  NavigationParamList,
  Routes.popularProducts
>;

export const PopularProductsScreen: React.FC<ScreenProb> = ({navigation}) => {
  const ref = useRef<IBottomSheetRef>(null);
  const boxesArray = [
    {
      id: 1,
      title: 'Lowest price',
      isSelected: false,
    },
    {
      id: 1,
      title: 'Relevance',
      isSelected: false,
    },
  ];

  const [checkBoxes, setCheckBoxes] = useState(boxesArray);

  const categories = ['All', 'Shoes', 'T-Shirt', 'Tops', 'Sinkers', 'Blues'];

  const [category, setCategory] = useState<string>(categories[0] ?? '');

  const toggle = (index: number) => {
    const updatedCheckBoxes = checkBoxes.map((checkBox, i) => ({
      ...checkBox,
      isSelected: index === i ? !checkBox.isSelected : false,
    }));

    setCheckBoxes(updatedCheckBoxes);
  };

  const renderCheckBoxes = () => {
    return checkBoxes.map((checkBox, index) => {
      return (
        <CustomCheckBox
          key={index}
          isSelected={checkBox.isSelected}
          title={checkBox.title}
          setSelection={() => toggle(index)}
        />
      );
    });
  };
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
          <View style={styles.checkBoxesView}>{renderCheckBoxes()}</View>
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
  bottomSheetBody: {
    gap: normalize('vertical', 15),
    marginBottom: normalize('vertical', 43.6),
  },
  checkBoxesView: {
    gap: normalize('horizontal', 20),
  },
});
