export const setSuccessMessage = message => ({
  type:"SET_SUCCESS_MESSAGE",
  payload: message
})

export const setErrorMessage = message => ({
  type:"SET_ERROR_MESSAGE",
  payload: message
})

export const clearMessage = () => ({
  type:"CLEAR_MESSAGE"
})