import axios from 'axios';
import {
  FETCH_RESULTS_REQUEST,
  FETCH_RESULTS_SUCCESS,
  FETCH_RESULTS_FAILURE
} from './resultsListTypes';

  export const fetchResultsList = () => {
    return (dispatch) => {
      axios
        .get('http://localhost:3001/data')
        .then(response => {
          const data = response.data
          dispatch(fetchResultsListSuccess(data))
        })
        .catch(error => {
          dispatch(fetchResultsListFailure(error.message))
        })
    }
  }

  export const fetchResultsListRequest = () => {
    return {
      type: FETCH_RESULTS_REQUEST
    }
  }
  
  export const fetchResultsListSuccess = data => {
    return {      
      type: FETCH_RESULTS_SUCCESS,
      payload: data
    }
  }
  
  export const fetchResultsListFailure = error => {
    return {
      type: FETCH_RESULTS_FAILURE,
      payload: error
    }
  }
