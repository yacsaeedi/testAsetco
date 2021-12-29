import {combineReducers} from 'redux';

import appReducer from './app';
import appearanceReducer from './appearance';

const rootReducers = combineReducers({
  app: appReducer,
  appearance: appearanceReducer,
});

export default rootReducers;
