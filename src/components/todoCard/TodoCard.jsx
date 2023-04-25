import { useContext } from "react"
import "./TodoCard.css"
import { UserContext } from "../../contexts/UserContext"
import { deleteTodoService, editTodoService } from "../../services/todoService"
import { clearMessage, setErrorMessage, setSuccessMessage } from "../../actions/notificationActions"
import { TodoContext } from "../../contexts/TodoContext"
import { editTodoRequest, editTodoSuccess, deleteTodoFailed, deleteTodoRequest, deleteTodoSuccess, editTodoFailed } from "../../actions/todoActions"
import { NotificationContext } from "../../contexts/NotificationContext"

export const TodoCard = (todo) => {
  const { state, dispatch } = useContext(UserContext)
  const { todoState, todoDispatch } = useContext(TodoContext)
  const { notificationDispatch, showNotification } = useContext(NotificationContext)
  const { id, content, isCompleted, type, creationDate } = todo
  const createDate = new Date(creationDate)

  const handleTodoEdit = async (todoId) => {
    todoDispatch(editTodoRequest())
    try{
      const { data } = await editTodoService(todoId, state.user.userId)
      todoDispatch(editTodoSuccess(todoId))
      showNotification({type: 'success', message:"Updated todo!"})
    }catch(error){
      todoDispatch(editTodoFailed(error))
      showNotification({type: 'error', message:error.response.data})
    }
  }

  const handleTodoDelete = async (todoId) => {
    todoDispatch(deleteTodoRequest())
    try{
      const {status, data} = await deleteTodoService({todoId, userId: state.user.userId})
      if(status === 200){
        todoDispatch(deleteTodoSuccess(todoId))
        showNotification({type: 'success', message:"Deleted todo!"})
      }
    }catch(error){
      todoDispatch(deleteTodoFailed(error))
      showNotification({type: 'success', message:error.response.data})
    }
  }
  return (
    <section className="todo-card">
      <section className="todo-card-category">
        {/* <span className="todo-card-category-icon"></span> */}
        <p className="todo-card-category-text"><span style={{backgroundColor:type ? type.color : "teal"}} className="todo-card-category-icon"></span> {type ? type.type : 'Coding'}</p>
      </section>
      <h3 className="todo-card-title">{content}</h3>
      <p className="todo-card-date">{creationDate ? createDate.toDateString() : "23rd April, 2023"}</p>
      <section className="todo-card-buttons">
        <button className={`todo-card-btn ${isCompleted ? 'todo-card-btn-completed' : 'todo-card-btn-pending'}`} onClick={() => handleTodoEdit(id)}> 
          {isCompleted ? "Mark as not Done" : "Mark as done"}
        </button>
        <button className="todo-card-btn" onClick={() => handleTodoDelete(id)}>Delete</button>
      </section>
    </section>
  )
}