import { useContext } from "react"

import { UserContext } from "../../contexts/UserContext"
import { TodoContext } from "../../contexts/TodoContext"

import "./Notification.css"

export const Notification = ({type, content, loader}) => {
  const { state } = useContext(UserContext)
  const { todoState } = useContext(TodoContext)

  console.log(state.isLoading, todoState.isLoading)
  if(loader){
    console.log('inside loading')
    return (
      <div className="loader-container">
        <h2 className="loader"></h2>
      </div>
    )
  }
  
  return (
    <div className={`notification-container ${type === "success" ? "notification-success" : "notification-error"}`}>
      <p className="notification-content">{content}</p>
    </div>
  )
}