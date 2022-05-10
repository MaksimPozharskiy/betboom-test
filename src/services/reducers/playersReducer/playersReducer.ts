import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPlayer, IResultData } from '../../../interfaces/types';

export interface IPlayersInitialState {
  players: IPlayer[],
  currentPlayer: IPlayer | null,
  playerbets: IResultData[],
}

const initialState: IPlayersInitialState = {
  players: [],
  currentPlayer: null,
  playerbets: [],
};

const playersReducer = createSlice({
  name: 'playersReducer',
  initialState,
  reducers: {
    getPlayers(state: IPlayersInitialState, action: PayloadAction<IPlayer[]>) {
      return {
        ...state,
        players: action.payload,
      };
    },
    setCurrentPlayer(state: IPlayersInitialState, action: PayloadAction<IPlayer>) {
      return {
        ...state,
        currentPlayer: action.payload,
      };
    },
    setPlayerbets(state: IPlayersInitialState, action: PayloadAction<IResultData[]>) {
      return {
        ...state,
        playerbets: action.payload,
      };
    },
  },
});

export default playersReducer.reducer;
export const { getPlayers, setCurrentPlayer, setPlayerbets } = playersReducer.actions;
