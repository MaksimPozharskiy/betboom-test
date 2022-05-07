/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const testSlice = createSlice({
  name: 'testSlice',
  initialState: {
    count: 0,
  },
  reducers: {
    increment(state: any) {
      state.count += 1;
    },
    decrement(state: any) {
      state.count -= 1;
    },
  },
});

export default testSlice.reducer;
export const { increment, decrement } = testSlice.actions;
