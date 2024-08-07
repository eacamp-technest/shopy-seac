import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const MyComponent = () => {
  return (
    <View style={styles.container}>
      {/* Title div with image and text */}
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>WOMEN</Text>
        <Image source={require('../../assets/images/itemlist_women.png')} style={styles.titleImage} />
      </View>

      {/* Category list */}
      <View style={styles.categoryList}>
        <Text style={styles.listItem}>A-Line Dresses</Text>
        <Text style={styles.listItem}>A-Line Dresses</Text>
        <Text style={styles.listItem}>A-Line Dresses</Text>
        <Text style={styles.listItem}>A-Line Dresses</Text>
        <Text style={styles.listItem}>A-Line Dresses</Text>
        <Text style={styles.listItem}>A-Line Dresses</Text>
        <Text style={styles.listItem}>A-Line Dresses</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#000', // Kenarlık rengi (siyah)
    borderRadius: 10, // Kenarlık köşe yumuşatma
  },
  titleContainer: {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    height: 300,
    overflow:'hidden',
  },
  titleImage: {
    width: "100%",
    height: "100%",
    marginRight: 10,
    marginTop: 100,
    marginLeft: -45,
  },
  titleText: {
    position: 'absolute',
    top:10,
    left: 150,
    fontSize: 24,
    fontWeight: 'bold',
    zIndex: 1
  },
  categoryList: {
    width: '100%',
  },
  listItem: {
    padding: 20,
    fontWeight: 'bold',
    // borderWidth: 1,
    // borderColor: '#000', // Kenarlık rengi (siyah)
    // borderRadius: 10, // Kenarlık köşe yumuşatma
  },
});

export default MyComponent;
