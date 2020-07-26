import React from 'react';
import {StyleSheet, FlatList, TouchableOpacity, Text} from 'react-native';

import type {RootState} from '../store/reducers';
import {connect} from 'react-redux';
import {markBoard, changePlayer} from '../store/actions';
import {BoardState, Coordinate, Player} from 'App/store/types';

interface BoardComponentProps {
  board: BoardState;
  currentPlayer: Player;
  markBoard: typeof markBoard;
  changePlayer: typeof changePlayer;
}

function Board(props: BoardComponentProps) {
  console.log('Board props', props);

  function generateCells(props: BoardComponentProps) {
    let cellComponents = [];
    for (var i = 0; i < props.board.data.length; i++) {
      for (var j = 0; j < props.board.data[i].length; j++) {
        const cell = props.board.data[i][j];
        cellComponents.push(
          <TouchableOpacity
            onPress={() => onCellPressed({x: cell.x, y: cell.y}, props)}>
            <Text style={styles.cell}>{cell.marked ? 'X' : ' '}</Text>
          </TouchableOpacity>,
        );
      }
    }
    return cellComponents;
  }

  function onCellPressed(
    {x, y}: Coordinate,
    {board, currentPlayer}: BoardComponentProps,
  ) {
    console.log('Cell tapped: ', board.data[x][y]);
    if (board.data[x][y].marked) {
      return;
    }
    const cell = {x: x, y: y, value: currentPlayer.id, marked: true};
    board.data[x][y] = cell;
    props.markBoard(board);
    // setBoard(board);
  }

  return (
    <>
      <FlatList
        contentContainerStyle={styles.grid}
        numColumns={3}
        data={generateCells(props)}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => {
          return item;
        }}
      />
    </>
  );
}

const styles = StyleSheet.create({
  cell: {
    backgroundColor: 'grey',
    fontSize: 64,
    textAlign: 'center',
    margin: 4,
    width: 96,
    padding: 8,
    color: 'white',
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  grid: {
    marginBottom: 32,
    marginTop: 16,
    alignItems: 'center',
  },
});

const mapStateToProps = (state: RootState) => ({
  board: state.board,
  currentPlayer: state.game.currentPlayer,
});

const mapDispatchToProps = {
  markBoard: markBoard,
  changePlayer: changePlayer,
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);
