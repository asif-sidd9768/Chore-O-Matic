import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

import "./todos.css"
import { TodoCard } from "../components/todoCard/TodoCard";
import { TodoSidebar } from "../components/todoSidebar/TodoSidebar";
import { TodoNavbar } from "../components/todoNavbar/TodoNavbar";
import { EmptyTodoList } from "../components/emptyTodoList/EmptyTodoList";
import { TodoContext } from "../contexts/TodoContext";
export const Todos = () => {
  const { todoState, todoDispatch } = useContext(TodoContext)

  return (
    <>
      <section className="todos-container">
        <div className="todos-sidebar"> 
          <TodoSidebar />
        </div>
        <div className="todo-section-2">
          <TodoNavbar/>
          {
          todoState.filteredTodos.length !== 0 ? 
            <div className="todo-cards-container">
            {
            todoState.filteredTodos.map((todo) => 
                <TodoCard key={todo.id} {...todo} />
              ) 
            }
            </div>
            :
          <EmptyTodoList />}
        </div>
      </section>
    </>
  );
};
