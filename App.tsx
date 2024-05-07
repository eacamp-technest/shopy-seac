/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import BootSplash from 'react-native-bootsplash';
import {colors} from './src/theme/colors';
// import Router from './src/router';
import {SafeAreaProvider} from 'react-native-safe-area-context';
function App(): React.JSX.Element {
  useEffect(() => {
    const init = async () => {
      // …do multiple sync or async tasks
    };

    init().finally(async () => {
      await BootSplash.hide({fade: true});
      console.log('BootSplash has been hidden successfully');
    });
  }, []);

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={'dark-content'} />
      <View style={styles.root}>
        {/* <Router /> */}
        <Text>Hello World</Text>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.white,
  },
});

export default App;
