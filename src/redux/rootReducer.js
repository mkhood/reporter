import { combineReducers } from 'redux'
import reportsReducer from './report/reportReducers'
import resultsListReducer from './result/resultsListReducers'

const rootReducer = combineReducers({
  data: resultsListReducer,
  report: reportsReducer
})

export default rootReducer
