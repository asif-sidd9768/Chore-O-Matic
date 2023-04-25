import { createContext, useReducer } from "react";
import { initialStateNotification, notificationReducer } from "../reducers/notificationReducer";
import { clearMessage, setErrorMessage, setSuccessMessage } from "../actions/notificationActions";

export const NotificationContext = createContext()
export const NotificationProvider = ({children}) => {
  const [notificationState, notificationDispatch] = useReducer(notificationReducer, initialStateNotification)

  const handleClearMessage = (timeout) => {
    setTimeout(() => {
      notificationDispatch(clearMessage())
    }, 2000)
  }

  const showNotification = ({type, message, timeout=2}) => {
    switch(type){
      case "success":
        notificationDispatch(setSuccessMessage(message))
      case "error":
        notificationDispatch(setErrorMessage(message))
    }
    handleClearMessage(timeout)
  }

  return (
    <NotificationContext.Provider value={{notificationState, notificationDispatch, showNotification}}>
      {children}
    </NotificationContext.Provider>
  )
}