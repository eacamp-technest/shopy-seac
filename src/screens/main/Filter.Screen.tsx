import {StyleSheet, ScrollView, View, Text, Pressable} from 'react-native';
import React from 'react';
import {colors} from 'theme/colors';
import {normalize} from 'theme/metrics';
import {Navbar} from 'components/Navbar';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {NavigationParamList} from 'types/navigation.types';
import {Routes} from 'router/routes';
import {TypographyStyles} from 'theme/typography';
import {Slider} from 'components/Slider';
import {filterColors} from 'mock/Colors.Mock';
import {useFilterStoreActions} from 'store/filter';
import {useFilterStore} from 'store/filter/filter.store';
import {sizes} from 'mock/Sizes.Mock';
import {CommonStyles} from 'theme/common.styles';
import {categories} from 'mock/Categories.Mock';
import {Button} from 'components/Button';

type FilterScreenProp = NativeStackScreenProps<
  NavigationParamList,
  Routes.filter
>;

export const FilterScreen: React.FC<FilterScreenProp> = ({navigation}) => {
  const size = useFilterStore(state => state.size);
  const category = useFilterStore(state => state.category);
  const colorStore = useFilterStore(state => state.color);
  const range = useFilterStore(state => state.priceRange);
  const filterActions = useFilterStoreActions();

  const renderSizes = () => {
    return sizes.map(value => {
      return (
        <Pressable key={value.id} onPress={() => filterActions.setSize(value)}>
          <View style={[styles.chip, size === value && styles.activeChip]}>
            <Text
              style={[
                styles.inActiveText,
                value === size && styles.activeText,
              ]}>
              {value.name}
            </Text>
          </View>
        </Pressable>
      );
    });
  };

  const renderCategories = () => {
    return categories.map(value => {
      return (
        <Pressable
          key={value.id}
          onPress={() => filterActions.setCategory(value)}>
          <View style={[styles.chip, category === value && styles.activeChip]}>
            <Text
              style={[
                styles.inActiveText,
                value === category && styles.activeText,
              ]}>
              {value.name}
            </Text>
          </View>
        </Pressable>
      );
    });
  };

  const renderColors = () => {
    return filterColors.map(value => {
      return (
        <Pressable
          key={value.id}
          style={[
            styles.colorItem,
            {backgroundColor: value.code},
            value.id === colorStore?.id && styles.active,
          ]}
          onPress={() => {
            filterActions.setColor(value);
          }}
        />
      );
    });
  };

  return (
    <View style={styles.root}>
      <ScrollView style={styles.root}>
        <View style={styles.container}>
          <Navbar
            type="standard"
            leftActionType="icon"
            left={vectors.left}
            onLeftPress={() => navigation.goBack()}
            title="Filters"
          />
          <Navbar type="large" title="Price Range" titleStyle={styles.title} />
          <View style={styles.prices}>
            <Text style={styles.priceText}>{range[0]}$</Text>
            <Text style={styles.priceText}>{range[1]}$</Text>
          </View>

          <View>
            <Slider
              min={100}
              max={400}
              onChange={value => filterActions.setPrice(value)}
              thumbSize={normalize('width', 30)}
              trackHeight={2}
              step={10}
              thumpTintColor={colors.primary.base}
              outboundColor={colors.sky.light}
              inboundColor={colors.primary.base}
            />
          </View>
        </View>
        <View style={[styles.container]}>
          <Navbar type="large" title="Colors" titleStyle={styles.title} />
          <View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {renderColors()}
            </ScrollView>
          </View>
        </View>
        <View style={[styles.container]}>
          <Navbar type="large" title="Sizes" titleStyle={styles.title} />
          <ScrollView showsHorizontalScrollIndicator={false} horizontal>
            {renderSizes()}
          </ScrollView>
        </View>
        <View style={[styles.container, styles.categoryView]}>
          <Navbar type="large" title="Category" titleStyle={styles.title} />
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {renderCategories()}
          </ScrollView>
        </View>
      </ScrollView>
      <View style={styles.applyButton}>
        <Button
          type="primary"
          size="block"
          text="Apply filter"
          onPress={() => {
            console.log('Range', range);
            console.log('Color', colorStore);
            console.log('Size', size);
            console.log('Category', category);
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.sky.lightest,
  },
  container: {
    backgroundColor: colors.white,
    paddingHorizontal: normalize('horizontal', 24),
    marginVertical: normalize('horizontal', 10),
    paddingVertical: normalize('vertical', 32),
  },
  title: {...TypographyStyles.title3},
  inActiveText: {
    ...TypographyStyles.RegularNoneRegular,
    color: colors.ink.base,
  },
  activeText: {
    color: colors.white,
  },

  chip: {
    paddingHorizontal: normalize('horizontal', 16),
    paddingVertical: normalize('vertical', 8),
    backgroundColor: colors.sky.lightest,
    marginRight: normalize('vertical', 16),
    borderRadius: normalize('width', 20),
  },
  activeChip: {
    backgroundColor: colors.blue.base,
  },
  prices: {
    ...CommonStyles.justifyBetweenRow,
    marginBottom: normalize('vertical', 16),
  },
  priceText: {
    ...TypographyStyles.RegularTightSemiBold,
  },

  colorItem: {
    marginRight: normalize('horizontal', 17),
    height: normalize('width', 40),
    width: normalize('width', 40),
    borderRadius: normalize('vertical', 50),
  },
  active: {
    borderColor: colors.ink.base,
    borderWidth: 2,
  },
  applyButton: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    marginBottom: normalize('vertical', 10),
    marginHorizontal: normalize('horizontal', 15),
  },
  categoryView: {
    marginBottom: normalize('vertical', 45),
  },
});

const vectors = {
  left: {
    icon: require('../../assets/vectors/chevron-left.svg'),
    color: colors.ink.base,
  },
};
