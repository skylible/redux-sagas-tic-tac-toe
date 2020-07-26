export enum ActionTypes {
  MARK_BOARD = 'MARK_BOARD',
  RESET_BOARD = 'RESET_BOARD',
  INITIALIZE_GAME = 'INITIALIZE_GAME',
  CHANGE_PLAYER = 'CHANGE_PLAYER',
}

export interface BaseAction {
  type: ActionTypes;
}

interface MarkBoardAction extends BaseAction {
  type: ActionTypes.MARK_BOARD;
  payload: BoardState;
}

interface ResetBoardAction extends BaseAction {
  type: ActionTypes.RESET_BOARD;
}

interface InitializeGameAction extends BaseAction {
  type: ActionTypes.INITIALIZE_GAME;
}

interface ChangePlayerAction extends BaseAction {
  type: ActionTypes.CHANGE_PLAYER;
  payload: Player;
}

export type PlayerActionTypes = MarkBoardAction | ResetBoardAction;
export type GameActionTypes = InitializeGameAction | ChangePlayerAction;

export interface Coordinate {
  x: number;
  y: number;
}

export interface BoardState {
  data: Cell[][];
}

export interface BoardProps {
  width: number;
  height: number;
}

export interface Cell {
  x: number;
  y: number;
  value?: number;
  marked: boolean;
}

export interface Player {
  id: number;
}

export interface PlayerNode {
  value: Player;
  next?: PlayerNode;
}

export interface GameState {
  playersReady: boolean;
  gameStarted: boolean;
  gameStopped: boolean;
  currentPlayer: Player;
}
