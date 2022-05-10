import { configureStore } from '@reduxjs/toolkit';
import chartReducer from './reducers/chartReducer/chartReducer';
import playersReducer from './reducers/playersReducer/playersReducer';

export const store = configureStore({
  reducer: {
    chartReducer,
    playersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
