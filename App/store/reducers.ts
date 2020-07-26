import {
  ActionTypes,
  BoardState,
  PlayerActionTypes,
  GameState,
  GameActionTypes,
} from './types';
import {combineReducers} from 'redux';
import {INITIAL_GAME_STATE, INITIAL_BOARD_STATE} from './initial_constants';

export function gameReducer(
  state = INITIAL_GAME_STATE,
  action: GameActionTypes,
): GameState {
  switch (action.type) {
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
      return {
        ...INITIAL_BOARD_STATE,
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
