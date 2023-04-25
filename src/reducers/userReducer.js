export const initialState = {
  user: null,
  isLoading: false,
  isPopup: false
};

export const userReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_USER_REQUEST":
      return {...state, isLoading: true}
    case "LOGIN_USER_SUCCESS":
      return {...state, user:action.payload, isLoading: false};
    case "LOGIN_USER_FAILURE":
      return {...state, errorMessage: action.payload, isLoading: false}
    case "REGISTER_USER_REQUEST":
      return {...state, isLoading: true}
    case "REGISTER_USER_SUCCESS":
      return {...state, isLoading: false}
    case "REGISTER_USER_FAILURE":
      return {...state, isLoading: false}
    case 'SHOW_POPUP':
      return {...state, isPopup: true}
    case 'HIDE_POPUP':
      return {...state, isPopup: false}
    default:
      return { ...state };;
  }
};
