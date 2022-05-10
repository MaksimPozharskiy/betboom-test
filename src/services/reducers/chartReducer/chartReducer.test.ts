/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  IChartData, IPlayer, IResultData, ITotalResultsData,
} from '../../../interfaces/types';
import reducer, { getChartsData, getTotalResultData, IChartInitialState } from './chartReducer';

const chartsDataTest: IChartData[] = [
  {
    name: 'Oleg',
    id: 2,
    win: [{ day: 'monday', value: 20 }, { day: 'sunday', value: 670 }],
    loose: [{ day: 'monday', value: 22 }, { day: 'sunday', value: 999 }],
    bets: [{ day: 'monday', value: 22 }, { day: 'sunday', value: 999 }],
  },
  {
    name: 'Micl',
    id: 3,
    win: [{ day: 'monday', value: 50 }, { day: 'sunday', value: 670 }],
    loose: [{ day: 'monday', value: 252 }, { day: 'sunday', value: 9599 }],
    bets: [{ day: 'monday', value: 225 }, { day: 'sunday', value: 9599 }],
  },
];

const totalResultsData: ITotalResultsData = {
  totalLooses: [{ day: 'monday', value: 50 }, { day: 'sunday', value: 670 }],
  totalWins: [{ day: 'monday', value: 252 }, { day: 'sunday', value: 9599 }],
};

const previousState: IChartInitialState = {
  chartsData: [],
  totalResultsData: {
    totalWins: [],
    totalLooses: [],
  },
};

test('should return the initial state', () => expect(reducer(undefined, {
  type: undefined,
})).toEqual(previousState));

test('should record charts all players in state', () => {
  expect(reducer(previousState, getChartsData(chartsDataTest))).toEqual({
    ...previousState,
    chartsData: chartsDataTest,
  });
});

test('should record total results all players in state', () => {
  expect(reducer(previousState, getTotalResultData(totalResultsData))).toEqual({
    ...previousState,
    totalResultsData,
  });
});
