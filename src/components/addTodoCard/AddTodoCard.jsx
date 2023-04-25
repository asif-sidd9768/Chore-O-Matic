import { useContext } from "react"
import "./AddTodoCard.css"
import { UserContext } from "../../contexts/UserContext"
import { TodoContext } from "../../contexts/TodoContext"
import { addTodoFailed, addTodoRequest, addTodoSuccess } from "../../actions/todoActions"
import { addTodoService } from "../../services/todoService"
import { NotificationContext } from "../../contexts/NotificationContext"

export const AddTodoCard = ({popupVisible, handlePopup}) => {
  const { state, dispatch } = useContext(UserContext)
  const { todoState, todoDispatch } = useContext(TodoContext)
  const { notificationDispatch, showNotification } = useContext(NotificationContext)
  
  const handleTodoAdd = async (event) => {
    event.preventDefault()
    const eventName = event.target[0].value
    const eventType = event.target[1].value
    todoDispatch(addTodoRequest())    
    try{
      const {data} = await addTodoService({eventName, eventType, userId: state.user.userId})
      todoDispatch(addTodoSuccess(data))
      showNotification({type: 'success', message:"Added todo!"})
      dispatch({type:"HIDE_POPUP"})
    }catch(error){
      todoDispatch(addTodoFailed(error))
      showNotification({type: 'error', message:error.response.data})
      handlePopup()
    }
  }

  const handleHidePopup = () => {
    dispatch({type:"HIDE_POPUP"})
  }
  return (
    <div className="add-todo-container" onClick={handleHidePopup}>
      <div className="add-todo-main" onClick={(event) => event.stopPropagation()}>
        <section className="add-todo-heading-container">
          <h1 className="add-todo-heading">Add Todo</h1>
          <span className="add-todo-close-btn" onClick={handleHidePopup}>x</span>
        </section>
        <hr />
        <section>
          <form action="" onSubmit={handleTodoAdd}>
            <section className="add-todo-content">
              <p className="add-todo-text">Event Name</p>
              <input type="text" className="add-todo-input" placeholder="Enter event name" />
            </section>
            <section className="add-todo-content">
              <p className="add-todo-text">Event Type</p>
              <select name="" id="" className="add-todo-event-type">
                <option value="Personal">Personal</option>
                <option value="Work">Work</option>
                <option value="Home">Home</option>
                <option value="Financial">Financial</option>
                <option value="Social">Social</option>
                <option value="Educational">Educational</option>
                <option value="Travel">Travel</option>
                <option value="Others">Others</option>
              </select>
            </section>
            <button className="add-todo-form-btn">
              Submit
            </button>
          </form>
        </section>
      </div>
    </div>
  )
}