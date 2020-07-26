/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {Provider} from 'react-redux';
import {SafeAreaView, StyleSheet, View, Text, StatusBar} from 'react-native';
import store from './store';
import Board from './components/Board';
import Controls from './components/Controls';

const App = () => {
  console.log(store.getState());

  return (
    <Provider store={store}>
      <>
        <StatusBar barStyle="light-content" />
        <SafeAreaView style={styles.container}>
          <View style={styles.headerArea}>
            <Text style={styles.headerText}>Tic Tac Toe</Text>
          </View>
          <View style={styles.playArea}>
            <Board />
            <Controls />
          </View>
        </SafeAreaView>
      </>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerArea: {
    backgroundColor: '#4b17e6',
    flex: 0.1,
    justifyContent: 'center',
  },
  headerText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 32,
  },
  playArea: {
    flex: 0.9,
    justifyContent: 'center',
  },
});

export default App;
