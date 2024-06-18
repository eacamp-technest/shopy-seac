import { ScrollView, StyleSheet } from 'react-native';
import React from 'react';
import DiscoverCard from 'components/DiscoverCard';
import { categories } from '../../mock/Discover.Mock';

const DiscoveryScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {Object.keys(categories).map((key) => (
        <DiscoverCard
          key={key}
          categoryName={categories[key]?.categoryName}
          backgroundColor={categories[key]?.backgroundColor}
          backgroundImage={categories[key]?.backgroundImage}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    gap: 25,
    paddingTop: 25,
    alignItems: 'center',
  },
});

export default DiscoveryScreen;
