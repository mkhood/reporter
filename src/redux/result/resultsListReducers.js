import {
  FETCH_RESULTS_REQUEST,
  FETCH_RESULTS_SUCCESS,
  FETCH_RESULTS_FAILURE
} from './resultsListTypes'

const initialState = {
    loading: false,
    data: [],
    error: ''
  }  

const resultsListReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_RESULTS_REQUEST:
        return {
          ...state,
          loading: true
        }
      case FETCH_RESULTS_SUCCESS:
        return {
          ...state,
          loading: false,
          data: action.payload,
          error: ''
        }
      case FETCH_RESULTS_FAILURE:
        return {
          ...state,
          loading: false,
          data: [],
          error: action.payload
        }
      default: return state
    }
  }

export default resultsListReducer
