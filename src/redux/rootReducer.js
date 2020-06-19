import { combineReducers } from 'redux';
import reportsReducer from './report/reportReducers';
import cardsReducer from './cards/cardsReducers';
import resultsListReducer from './result/resultsListReducers';

const rootReducer = combineReducers({
  data: resultsListReducer,
  cards: cardsReducer,
  report: reportsReducer
})

export default rootReducer
