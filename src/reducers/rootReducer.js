import { combineReducers } from 'redux';
import { quote } from './quote';
import { people } from './people';
import { planets } from './planets';
import { vehicles } from './vehicles';

export const rootReducer = combineReducers({
  quote,
  people,
  planets,
  vehicles
});