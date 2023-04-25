export const initialStateTodo = {
  todos: null,
  isLoading: false,
  filteredTodos: null,
  errorMessage: null,
  successMessage: null,
  isPopup: false
}

export const todoReducer = (state, action) => {
  switch (action.type) {
    case 'SET_TODOS':
      return {...state, todos:action.payload, filteredTodos:action.payload}
    case "FILTER_SEARCH": 
      const filteredSearch = state.todos.filter(({content}) => content.toLowerCase().includes(action.payload.toLowerCase()))
      return {...state, filteredTodos: filteredSearch}
    case 'FILTER_COMPLETED':
      const filteredCompleted = state.todos.filter(item => item.isCompleted);
      return { ...state, filteredTodos: filteredCompleted };
    case 'FILTER_PENDING':
      const filteredPending = state.todos.filter(item => !item.isCompleted);
      return { ...state, filteredTodos: filteredPending };
    case "ADD_TODO_REQUEST":
      return {...state, isLoading: true}
    case "ADD_TODO_SUCCESS":
      const addedTodo = [...state.todos, action.payload]
      return {...state, todos: addedTodo, filteredTodos: addedTodo, isLoading: false};
    case "ADD_TODO_FAILURE":      
      return {...state, errorMessage:action.payload, isLoading: false}
    case "EDIT_TODO_REQUEST":
      return {...state, isLoading: true}
    case "EDIT_TODO_SUCCESS":
      const updatedTodo = state.todos.map(todo => todo.id === action.payload ? {
        ...todo, isCompleted: !todo.isCompleted} : todo)
      return {...state, todos: updatedTodo, isLoading: false };
    case "EDIT_TODO_FAILURE":      
      return {...state, errorMessage:action.payload, isLoading: false}
    case "DELETE_TODO_REQUEST":
      return {...state, isLoading: true}
    case "DELETE_TODO_SUCCESS":
      const deletedTodoUpdate = state.todos.filter(({id}) => id !== action.payload)
      return {...state, todos: deletedTodoUpdate, filteredTodos: deletedTodoUpdate, isLoading: false};
    case "DELETE_TODO_FAILURE":
      return {...state, errorMessage:action.payload, isLoading: false}
    case 'FILTER_ALL':
    default:
      return { ...state, filteredTodos: [...state.todos] };;
  }
};
