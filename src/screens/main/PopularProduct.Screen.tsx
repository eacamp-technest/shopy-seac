import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Pressable,
  StatusBar,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {Navbar} from 'components/Navbar';
import {colors} from 'theme/colors';
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
import {useCategoryActions} from 'store/brand';
import {useCategoryStore} from 'store/brand/brand.store';

type ScreenProp = NativeStackScreenProps<
  NavigationParamList,
  Routes.popularProducts
>;

const boxesArray = [
  {id: 1, title: 'Lowest price', isSelected: false},
  {id: 2, title: 'Relevance', isSelected: false},
];

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

export const PopularProductsScreen: React.FC<ScreenProp> = ({navigation}) => {
  const ref = useRef<IBottomSheetRef>(null);
  const [checkBoxes, setCheckBoxes] = useState(boxesArray);
  const categories = ['All', 'Shoes', 'T-Shirt', 'Tops', 'Sinkers', 'Blues'];
  const categoryActions = useCategoryActions();
  const categoryStore = useCategoryStore();

  const toggle = (index: number) => {
    const updatedCheckBoxes = checkBoxes.map((checkBox, i) => ({
      ...checkBox,
      isSelected: index === i ? !checkBox.isSelected : false,
    }));

    setCheckBoxes(updatedCheckBoxes);
  };

  const renderCheckBoxes = () => {
    return checkBoxes.map((checkBox, index) => (
      <CustomCheckBox
        key={index}
        isSelected={checkBox.isSelected}
        title={checkBox.title}
        setSelection={() => toggle(index)}
      />
    ));
  };

  const renderCategories = ({item}: {item: string}) => {
    return (
      <Pressable
        style={[
          styles.inactiveContainer,
          categoryStore.category === item && styles.activeContainer,
        ]}
        onPress={() => categoryActions.setCategory(item)}>
        <Text style={styles.buttonText}>{item}</Text>
      </Pressable>
    );
  };

  return (
    <ScrollView
      scrollEnabled={true}
      contentContainerStyle={styles.contentContainerStyle}>
      <StatusBar
        backgroundColor={colors.bdazzledBlue.darkest}
        barStyle={'light-content'}
      />
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
        <FlashList
          data={categories}
          estimatedItemSize={50}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          renderItem={renderCategories}
        />
      </View>
      <View style={styles.body}>
        <FlashList
          data={productsArray}
          estimatedItemSize={100}
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
        <Button
          text="Apply"
          onPress={() => {
            ref.current?.close();
            navigation.navigate(Routes.itemList);
          }}
        />
      </BottomSheet>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  activeContainer: {
    backgroundColor: colors.primary.base,
  },
  buttonText: {
    ...TypographyStyles.RegularNoneRegular,
    color: colors.white,
  },
  inactiveContainer: {
    backgroundColor: colors.bdazzledBlue.base,
    paddingHorizontal: normalize('horizontal', 16),
    paddingVertical: normalize('vertical', 8),
    borderRadius: normalize('vertical', 100),
    marginRight: normalize('horizontal', 10),
  },
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
