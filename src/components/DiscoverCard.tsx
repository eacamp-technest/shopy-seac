// components/DiscoverCard.js

import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import { Category } from '../models/DiscoverCategory';

const DiscoverCard = ({ categoryName, backgroundColor, backgroundImage }: Category) => {
  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Image
        source={backgroundImage}
        style={styles.image}
      />
      <Text style={styles.text}>{categoryName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#000', // Kenarlık rengi (siyah)
    borderRadius: 10, // Kenarlık köşe yumuşatma
    overflow: 'hidden',
    height: 184,
    width: 327,
    position: 'relative'
  },
  image: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  text: {
    position: 'absolute',
    left: 20,
    bottom: 20,
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
});

export default DiscoverCard;
