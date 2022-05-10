/* eslint-disable @typescript-eslint/no-unused-vars */
import { IPlayer, IResultData } from '../../../interfaces/types';
import reducer, {
  getPlayers, IPlayersInitialState, setCurrentPlayer, setPlayerbets,
} from './playersReducer';

const allPlayersTest: IPlayer[] = [
  { Name: 'Oleg', id: 1 },
  { Name: 'Natasha', id: 2 },
  { Name: 'Max', id: 3 },
];

const playerTest: IPlayer = {
  Name: 'Oleg', id: 1,
};

const playerBetsTest: IResultData[] = [
  { day: 'monday', value: 20 },
  { day: 'sunday', value: 670 },
];

const previousState: IPlayersInitialState = {
  players: [],
  currentPlayer: null,
  playerbets: [],
};

test('should return the initial state', () => expect(reducer(undefined, {
  type: undefined,
})).toEqual(previousState));

test('should record all players in state', () => {
  expect(reducer(previousState, getPlayers(allPlayersTest))).toEqual({
    ...previousState,
    players: allPlayersTest,
  });
});

test('should record current choose player in state', () => {
  expect(reducer(previousState, setCurrentPlayer(playerTest))).toEqual({
    ...previousState,
    currentPlayer: playerTest,
  });
});

test('should record bets of choose player in state', () => {
  expect(reducer(previousState, setPlayerbets(playerBetsTest))).toEqual({
    ...previousState,
    playerbets: playerBetsTest,
  });
});
