import { useContext } from "react"
import { UserContext } from "../contexts/UserContext"
import { clearMessage, setErrorMessage, setSuccessMessage } from "../actions/notificationActions"
const {state, dispatch} = useContext(UserContext)

const handleClearMessage = () => {
  setTi(() => {
    dispatch(clearMessage())
  }, 3000)
}

export const successHelper = (message) => {
  dispatch(setSuccessMessage(message))
  handleClearMessage()
}

export const errorHelper = (message) => {
  dispatch(setErrorMessage(message))
  handleClearMessage()
}