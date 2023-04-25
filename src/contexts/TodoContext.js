import { createContext, useReducer } from "react";
import { initialStateTodo, todoReducer } from "../reducers/todoReducer";

export const TodoContext = createContext();
export const TodoProvider = ({ children }) => {
  const [todoState, todoDispatch] = useReducer(todoReducer, initialStateTodo);

  const filterTodo = (filter) => {
    switch (filter.filterValue) {
      case 'completed':
        todoDispatch({ type: 'FILTER_COMPLETED' });
        break;
      case 'pending':
        todoDispatch({ type: 'FILTER_PENDING' });
        break;
      case 'search': 
        todoDispatch({type: 'FILTER_SEARCH', payload: filter.searchParam})
        break;
      case 'all':
      default:
        todoDispatch({ type: 'FILTER_ALL' });
    }
  };

  return (
    <TodoContext.Provider value={{todoState, filterTodo, todoDispatch}}>
      {children}
    </TodoContext.Provider>
  );
};
