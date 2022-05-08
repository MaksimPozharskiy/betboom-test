import { configureStore } from '@reduxjs/toolkit';
import chartReducer from './reducers/chartReducer';
import playersReducer from './reducers/playersReducer';

export const store = configureStore({
  reducer: {
    chartReducer,
    playersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
