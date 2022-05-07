/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
// import Api from '../../utils/Api';

const chartReducer = createSlice({
  name: 'chartReducer',
  initialState: {
    chartsData: [],
  },
  reducers: {
    getChartsData(state: any, action) {
      state.chartsData = action.payload;
    },
  },
});

export default chartReducer.reducer;
export const { getChartsData } = chartReducer.actions;
