import { configureStore } from '@reduxjs/toolkit';
import chartReducer from './reducers/chartReducer';

export const store = configureStore({
  reducer: {
    chartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
