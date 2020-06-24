import axios from 'axios';
import {
  SET_CURRENT_FILE,
  SET_CURRENT_REPORT_DATA,
  FETCH_DATA_FAILURE,
  SET_CURRENT_REPORT_NAME
} from './reportTypes';

  export const fetchReportData = ( fetchReportData ) => {

    return (dispatch) => {

      const fileName = fetchReportData
      
      axios
      // console.log(fileName,"BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB")
        .get(`http://localhost:3001/file${fileName}`)
        // .get(`http://localhost:3001/file${'/2020/06/19/06/47'}`)
        .then(response => {
          const data = response.data
          dispatch(fetchReportDataSuccess(data))
        })
        .catch(error => {
          dispatch(fetchReportDataFailure(error.message))
        })
    }
  }

  export const selectFile = (data) => {
    return {
        type: SET_CURRENT_FILE,
        payload: data
    }
  }

  export const setCurrentReportName = (data) => {
    return {
        type: SET_CURRENT_REPORT_NAME,
        payload: data
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
