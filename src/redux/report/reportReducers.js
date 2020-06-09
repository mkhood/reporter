import {
  FETCH_SINGLE_REPORT,
  SET_CURRENT_FILE,
  SET_CURRENT_REPORT_DATA
} from './reportTypes'

const initialState = {
    loading: false,
    data: [],
    isCurrentReportSet: false,
    selectedFile: null,
    currentReportData: null,
    error: ''
  }

const reportsReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_SINGLE_REPORT:
        return {
          ...state,
          loading: true
        }
      case SET_CURRENT_FILE:
          return {
            ...state,
            selectedFile: action.payload
          }
      case SET_CURRENT_REPORT_DATA:
          return {
            isCurrentReportSet: true,
            currentReportData: action.payload
      }    
      default: return state
    }
  }

export default reportsReducer