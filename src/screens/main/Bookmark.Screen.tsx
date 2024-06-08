import {View, StyleSheet, Text} from 'react-native';
import React from 'react';
import {colors} from 'theme/colors';
import {TypographyStyles} from 'theme/typography';
import {SceneMap, TabBar, TabBarProps, TabView} from 'react-native-tab-view';
import {BoardsView} from 'views/Boards.View';
import {screenWidth} from 'theme/consts.styles';
import {AllItemsView} from 'views/AllItems.View';

type CustomTabBarProps = TabBarProps<any>;

const routes = [
  {key: 'first', title: 'AllItems'},
  {key: 'second', title: 'Boards'},
];

const renderScene = SceneMap({
  first: AllItemsView,
  second: BoardsView,
});

export const BookmarkScreen = () => {
  const [index, setIndex] = React.useState(0);
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
      <View style={styles.header}>
        <Text style={styles.title}>SAVED ITEM</Text>
      </View>
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{width: screenWidth}}
        renderTabBar={renderTabBar}
        swipeEnabled={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  header: {
    backgroundColor: colors.bdazzledBlue.darkest,
    alignItems: 'center',
  },
  title: {
    ...TypographyStyles.title3,
    color: colors.white,
    marginBottom: 22,
  },
  tabBar: {
    backgroundColor: colors.bdazzledBlue.darkest,
  },
  indicator: {backgroundColor: colors.skyBlue.base},
});
