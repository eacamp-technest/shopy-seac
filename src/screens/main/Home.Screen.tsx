/* eslint-disable react/no-unstable-nested-components */
import {
  View,
  StyleSheet,
  StatusBar,
  Text,
  Pressable,
  useWindowDimensions,
} from 'react-native';
import React from 'react';
import {colors} from 'theme/colors';
import {SvgImage} from 'components/SvgImage';
import {TypographyStyles} from 'theme/typography';
import {normalize} from 'theme/metrics';
import {CustomTextInput} from 'components/TextInput';
import {SceneMap, TabBar, TabBarProps, TabView} from 'react-native-tab-view';
import {InStoreView} from 'views/InStore.View';
import {AllStoreView} from 'views/AllStore.View';
import {Routes} from 'router/routes';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {NavigationParamList} from 'types/navigation.types';

type CustomTabBarProps = TabBarProps<any>;

export const HomeScreen: React.FC<
  NativeStackScreenProps<NavigationParamList, Routes.home>
> = ({navigation}) => {
  const [index, setIndex] = React.useState(0);
  const routesArray = [
    {key: 'allStore', title: 'All Stores'},
    {key: 'inStore', title: 'In-Store'},
  ];
  const [routes] = React.useState(routesArray);

  const layout = useWindowDimensions();

  const navBarIcon = (icon: NodeRequire, onPress: () => void) => {
    return (
      <Pressable onPress={onPress}>
        <SvgImage
          source={icon}
          color={colors.white}
          width={normalize('vertical', 24)}
          height={normalize('vertical', 24)}
        />
      </Pressable>
    );
  };

  const renderScene = SceneMap({
    allStore: () => <AllStoreView navigation={navigation} />,
    inStore: InStoreView,
  });

  const renderTabBar = (props: CustomTabBarProps) => {
    return (
      <TabBar
        {...props}
        style={styles.tabBar}
        indicatorStyle={styles.indicator}
        activeColor={colors.skyBlue.base}
        inactiveColor={colors.white}
        labelStyle={{...TypographyStyles.RegularNoneSemiBold}}
      />
    );
  };

  return (
    <View style={styles.root}>
      <StatusBar
        backgroundColor={colors.bdazzledBlue.darkest}
        barStyle={'light-content'}
      />
      <View style={styles.header}>
        <View style={styles.body}>
          <View style={styles.navBar}>
            {navBarIcon(vectors.menu, () => console.log('Menu'))}
            <Text style={styles.title}>SHOPPAY</Text>
            {navBarIcon(vectors.shoppingBag, () => console.log('bag'))}
          </View>
          <CustomTextInput
            placeholder={texts.placeholder}
            leftIcon={vectors.search}
          />
        </View>
        <View style={styles.tabView}>
          <TabView
            navigationState={{index, routes}}
            renderScene={renderScene}
            onIndexChange={setIndex}
            swipeEnabled={false}
            initialLayout={{width: layout.width}}
            renderTabBar={renderTabBar}
          />
        </View>
      </View>
    </View>
  );
};

const vectors = {
  menu: require('../../assets/vectors/menu.svg'),
  shoppingBag: require('../../assets/vectors/shopping-bag.svg'),
  search: require('../../assets/vectors/search.svg'),
};

const texts = {
  placeholder: 'Search brand, products...',
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: colors.white,
    flex: 1,
  },
  header: {
    backgroundColor: colors.bdazzledBlue.darkest,
    width: '100%',
  },
  title: {
    ...TypographyStyles.title3,
    color: colors.white,
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: normalize('horizontal', 24),
  },
  tabView: {
    marginTop: normalize('vertical', 24),
    backgroundColor: colors.white,
    height: normalize('height', 610),
  },
  tabBar: {backgroundColor: colors.bdazzledBlue.darkest},
  body: {
    paddingHorizontal: normalize('horizontal', 12),
  },
  indicator: {backgroundColor: colors.skyBlue.base},
});
