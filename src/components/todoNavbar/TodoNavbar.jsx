import "./TodoNavbar.css";
import { AddTodoCard } from "../addTodoCard/AddTodoCard";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import { TodoContext } from "../../contexts/TodoContext";

export const TodoNavbar = () => {
  const { state, filterData, dispatch } = useContext(UserContext)
  const { todoState, todoDispatch, filterTodo } = useContext(TodoContext)
  const [isActive, setIsActive] = useState("all")
  const [popupVisible, setPopupVisible] = useState(false);
  
  const handlePopup = () => {
    dispatch({type:"SHOW_POPUP"})
  }

  const handleFilter = (filterValue) => {
    filterTodo({filterValue})
    setIsActive(filterValue)
  }

  const handleSearchTodo = (event) => {
    event.preventDefault()
    filterTodo({filterValue:"search", searchParam: event.target[0].value})
  }

  useEffect(() => {
    if(state.user){
      filterTodo({filterValue: isActive})
    }
  }, [todoState.todos])

  return (
    <div className="navbar">
      <nav className="nav-container">
        <button className={`nav-item ${isActive === "all" ? "nav-item-active" : ""}`} onClick={() => handleFilter("all")}>All todos</button>
        {todoState.todos.length !== 0 && <> <button className={`nav-item ${isActive === "pending" ? "nav-item-active" : ""}`} onClick={() => handleFilter('pending')}>Pending</button>
        <button className={`nav-item ${isActive === "completed" ? "nav-item-active" : ""}`} onClick={() => handleFilter('completed')}>Completed</button></>}
      </nav>
      <div className="nav-right">
        <button
          className="add-todo-btn"
          onClick={handlePopup}
        >
          Add Todo
        </button>
        <form className="search-form-container" onSubmit={handleSearchTodo}>
          <input
            placeholder="Search todo..."
            className="search-todo"
            type="text"
          />
          <button className="search-todo-btn">search</button>
        </form>
      </div>
      {state.isPopup && <AddTodoCard popupVisible={popupVisible} handlePopup={handlePopup} />}
    </div>
  );
};
