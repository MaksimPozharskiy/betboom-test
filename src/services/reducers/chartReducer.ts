import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IChartData, ITotalResultsData } from '../../interfaces/types';

interface IChartInitialState {
  chartsData: IChartData[],
  totalResultsData: ITotalResultsData,
}

const initialState: IChartInitialState = {
  chartsData: [],
  totalResultsData: {
    totalWins: [],
    totalLooses: [],
  },
};

const chartReducer = createSlice({
  name: 'chartReducer',
  initialState,
  reducers: {
    getChartsData(state: IChartInitialState, action: PayloadAction<IChartData[]>) {
      return {
        ...state,
        chartsData: action.payload,
      };
    },
    getTotalResultData(state: IChartInitialState, action: PayloadAction<ITotalResultsData>) {
      return {
        ...state,
        totalResultsData: action.payload,
      };
    },
  },
});

export default chartReducer.reducer;
export const { getChartsData, getTotalResultData } = chartReducer.actions;
