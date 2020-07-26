import {GameState, BoardState, BoardProps, Player, PlayerNode} from './types';

export const BOARD_HEIGHT = 3;
export const BOARD_WIDTH = 3;
export const INITIAL_PLAYERS = [{id: 0}, {id: 1}];
export const INITIAL_CURRENT_PLAYER = INITIAL_PLAYERS[0];
export const INITIAL_GAME_STATE: GameState = {
  playersReady: true,
  gameStarted: false,
  gameStopped: true,
  currentPlayer: INITIAL_CURRENT_PLAYER,
};
export const INITIAL_PLAYER_LINKED_LIST = initializePlayerLinkedList(
  INITIAL_PLAYERS,
);
export const INITIAL_BOARD_STATE: BoardState = {
  data: initializeBoardState({width: BOARD_WIDTH, height: BOARD_HEIGHT}),
};

function initializeBoardState({width, height}: BoardProps) {
  let board = [];
  for (var i = 0; i < width; i++) {
    let row = [];
    for (var j = 0; j < height; j++) {
      row.push({marked: false, x: i, y: j});
    }
    board.push(row);
  }
  return board;
}

function initializePlayerLinkedList(players: Player[]) {
  const head = <PlayerNode>{value: players[0]};
  let currNode = head;
  for (let i = 1; i < players.length; i++) {
    let nextNode = <PlayerNode>{value: players[1]};
    currNode.next = nextNode;
    currNode = nextNode;
  }
  currNode.next = head;
  return head;
}
