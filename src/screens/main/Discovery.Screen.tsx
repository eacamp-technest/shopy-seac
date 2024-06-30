import { ScrollView, StyleSheet } from 'react-native';
import React from 'react';
import DiscoverCard from 'components/DiscoverCard';
import { categories } from '../../mock/Discover.Mock';

const DiscoveryScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {Object.keys(categories).map((key) => {
        const category = categories[key];
        if (category) {
          return (
            <DiscoverCard
              key={key}
              categoryName={category.categoryName || ''}
              backgroundColor={category.backgroundColor || ''}
              backgroundImage={category.backgroundImage}
              menuItems={category.menuItems || []}  // Varsayılan değer olarak boş bir array
            />
          );
        }
        return null;
      })}
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
