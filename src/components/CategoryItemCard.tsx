
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ImageComponent: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/categorywomen.png')} 
        style={styles.image}
      />
      <Text style={styles.text}>WOMEN</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
    padding: 16,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  text: {
    color: 'white', 
    fontSize: 18, 
    fontWeight: 'bold', 
    marginTop: 8,
  },
});

export default ImageComponent;
