import {
  FETCH_CARDS_DATA,
  FETCH_RESULTS_FAILURE
} from './cardsTypes'

const initialState = {
    loading: false,
    cardsData: [],
    error: ''
  }

const cardsReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_CARDS_DATA:
          return {
            ...state,
            cardsData: action.payload
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

export default cardsReducer