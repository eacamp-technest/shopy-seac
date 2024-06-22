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
import {FlashList} from '@shopify/flash-list';
import {filterColors} from 'mock/Colors.Mock';
import {useFilterStoreActions} from 'store/filter';
import {useFilterStore} from 'store/filter/filter.store';

type FilterScreenProp = NativeStackScreenProps<
  NavigationParamList,
  Routes.filter
>;

export const FilterScreen: React.FC<FilterScreenProp> = ({navigation}) => {
  const filterStore = useFilterStore();
  const filterActions = useFilterStoreActions();
  const range = filterStore.priceRange;

  return (
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

        <View style={styles.slider}>
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
      <View style={[styles.container, styles.colorField]}>
        <Navbar type="large" title="Colors" titleStyle={styles.title} />
        <View>
          <FlashList
            data={filterColors}
            estimatedItemSize={filterColors.length}
            horizontal
            renderItem={({item}) => {
              return (
                <Pressable
                  key={item.id}
                  style={[
                    styles.colorItem,
                    {backgroundColor: item.code},
                    item.id === filterStore.color?.id && styles.active,
                  ]}
                  onPress={() => filterActions.setColor(item)}
                />
              );
            }}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
    </ScrollView>
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
  },
  title: {...TypographyStyles.title3},
  prices: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: normalize('vertical', 16),
  },
  priceText: {
    ...TypographyStyles.RegularTightSemiBold,
  },
  slider: {
    paddingHorizontal: normalize('horizontal', 10),
    marginBottom: normalize('horizontal', 32),
  },
  colorField: {
    marginVertical: normalize('horizontal', 15),
    paddingVertical: normalize('vertical', 32),
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
});

const vectors = {
  left: {
    icon: require('../../assets/vectors/chevron-left.svg'),
    color: colors.ink.base,
  },
};
