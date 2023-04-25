export const loginUserRequest = () => ({
  type:"LOGIN_USER_REQUEST",
})

export const loginUserSuccess = (user) => ({
  type: "LOGIN_USER_SUCCESS",
  payload: {...user}
});

export const loginUserFailed = (error) => ({
  type:"LOGIN_USER_FAILURE",
  payload: error
})

export const registerUserRequest = () => ({
  type:"REGISTER_USER_REQUEST"
})

export const registerUserSuccess = () => ({
  type: "REGISTER_USER_SUCCESS"
})

export const registerUserFailed = () => ({
  type:"REGISTER_USER_FAILURE"
})