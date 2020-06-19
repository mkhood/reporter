import axios from 'axios';
import {
  FETCH_CARDS_DATA,
  FETCH_RESULTS_FAILURE
} from './cardsTypes';

  export const selectFile = (data) => {
    return {
        type: FETCH_CARDS_DATA,
        payload: data
    }
  }

  export const fetchCardsData = (fileName) => {

    return (dispatch) => {

        axios
        .get(`http://localhost:3001/file${fileName}`)
        .then(response => {
          const data = response.data
          dispatch(fetchCardsDataSuccess(data))
        })
        .catch(error => {
          dispatch(fetchCardsDataFailure(error.message))
        })

      }
    }
 

  export const fetchCardsDataSuccess = data => {
    return {      
      type: FETCH_CARDS_DATA,
      payload: data
    }
  }

  export const fetchCardsDataFailure = error => {
    return {      
      type: FETCH_RESULTS_FAILURE,
      payload: error
    }
  }
