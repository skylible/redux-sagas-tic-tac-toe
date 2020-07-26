import {
  ActionTypes,
  BoardState,
  PlayerActionTypes,
  GameState,
  GameActionTypes,
} from './types';
import {combineReducers} from 'redux';
import {
  INITIAL_GAME_STATE,
  INITIAL_BOARD_STATE,
  initializeBoardState,
  BOARD_HEIGHT,
  BOARD_WIDTH,
} from './initial_constants';

export function gameReducer(
  state = INITIAL_GAME_STATE,
  action: GameActionTypes,
): GameState {
  switch (action.type) {
    case ActionTypes.CHANGE_PLAYER: {
      return {
        ...state,
        currentPlayer: action.payload,
      };
    }
    default:
      return state;
  }
}

export function boardReducer(
  state = INITIAL_BOARD_STATE,
  action: PlayerActionTypes,
): BoardState {
  switch (action.type) {
    case ActionTypes.MARK_BOARD: {
      return {
        ...state,
        ...action.payload,
      };
    }
    case ActionTypes.RESET_BOARD: {
      console.log('Reset Board Reducer called');
      return {
        data: initializeBoardState({width: BOARD_WIDTH, height: BOARD_HEIGHT}),
      };
    }
    default:
      return state;
  }
}

export const rootReducer = combineReducers({
  game: gameReducer,
  board: boardReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
