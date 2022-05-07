import { configureStore } from '@reduxjs/toolkit';
import chartReducer from './reducers/chartReducer';
import testSlice from './reducers/testSlice';

export const store = configureStore({
  reducer: {
    testSlice,
    chartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
