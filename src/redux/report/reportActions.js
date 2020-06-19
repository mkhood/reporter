import axios from 'axios';
import {
  SET_CURRENT_FILE,
  SET_CURRENT_REPORT_DATA,
  FETCH_DATA_FAILURE
} from './reportTypes';

export const selectFile = (data) => {
  return {
      type: SET_CURRENT_FILE,
      payload: data
  }
}

  export const fetchReportData = ( fetchReportData ) => {

    return (dispatch) => {

      const fileName = fetchReportData.substr(6, 17)    

      axios
        .get(`http://localhost:3001/file${fileName}`)
        .then(response => {
          const data = response.data
          dispatch(fetchReportDataSuccess(data))
        })
        .catch(error => {
          dispatch(fetchReportDataFailure(error.message))
        })
    }
  } 

  export const fetchReportDataSuccess = data => {
    return {      
      type: SET_CURRENT_REPORT_DATA,
      payload: data
    }
  }

  export const fetchReportDataFailure = error => {
    return {
      type: FETCH_DATA_FAILURE,
      payload: error
    }
  }
