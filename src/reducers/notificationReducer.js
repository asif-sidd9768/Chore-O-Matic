export const initialStateNotification = {
  errorMessage: null,
  successMessage: null,
}

export const notificationReducer = (state, action) => {
  switch(action.type){
    case "SET_SUCCESS_MESSAGE":
      return {...state, isLoading:false, successMessage: action.payload}
    case "SET_ERROR_MESSAGE":
      return {...state, isLoading: false, errorMessage: action.payload}
    case "CLEAR_MESSAGE": 
      return {...state, errorMessage: null, successMessage:null}
    default: 
      return {...state}
  }
}