import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { logger } from 'redux-logger';
import rocketsReducer from './rockets/rocketSlice';
import missionsReducer from './missions/missions';

const rootReducer = combineReducers({
  rockets: rocketsReducer, missions: missionsReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
