import React from 'react';
import {StyleSheet, Button, FlatList} from 'react-native';

import type {RootState} from '../store/reducers';
import {resetBoard} from '../store/actions';
import {connect} from 'react-redux';

function Controls(props: any) {
  const buttons = [<Button title={'Restart Game'} onPress={onReset} />];

  console.log('Controls props', props);

  function onReset() {
    console.log('Board reset');
    props.resetBoard();
  }

  return (
    <FlatList
      contentContainerStyle={styles.grid}
      numColumns={2}
      data={buttons}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({item}) => {
        return item;
      }}
    />
  );
}

const styles = StyleSheet.create({
  grid: {
    marginBottom: 32,
    marginTop: 16,
    alignItems: 'center',
  },
});

const mapStateToProps = (state: RootState) => ({
  ...state,
});

const mapDispatchToProps = {
  resetBoard: resetBoard,
};

export default connect(mapStateToProps, mapDispatchToProps)(Controls);
