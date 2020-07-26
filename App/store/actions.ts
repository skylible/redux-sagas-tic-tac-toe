import {
  ActionTypes,
  PlayerActionTypes,
  GameActionTypes,
  BoardState,
  Player,
} from './types';

export function markBoard(board: BoardState): PlayerActionTypes {
  console.log('Mark board called');
  return {
    type: ActionTypes.MARK_BOARD,
    payload: board,
  };
}

export function resetBoard(): PlayerActionTypes {
  console.log('Reset board called');
  return {
    type: ActionTypes.RESET_BOARD,
  };
}

export function initializeGame(): GameActionTypes {
  return {
    type: ActionTypes.INITIALIZE_GAME,
  };
}

export function changePlayer(currentPlayer: Player): GameActionTypes {
  return {
    type: ActionTypes.CHANGE_PLAYER,
    payload: currentPlayer,
  };
}
