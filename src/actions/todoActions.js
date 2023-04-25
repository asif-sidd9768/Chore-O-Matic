export const setTodos = (todos) => ({
  type:"SET_TODOS",
  payload: todos
})

export const addTodoRequest = () => ({
  type:"ADD_TODO_REQUEST",
})

export const addTodoSuccess = (content) => ({
  type: "ADD_TODO_SUCCESS",
  payload: content
});

export const addTodoFailed = (error) => ({
  type: "ADD_TODO_FAILURE",
  payload: error
});

export const editTodoRequest = () => ({
  type:"EDIT_TODO_REQUEST",
})

export const editTodoSuccess = (id) => ({
  type: "EDIT_TODO_SUCCESS",
  payload: id
});

export const editTodoFailed = (error) => ({
  type: "EDIT_TODO_FAILURE",
  payload: error
});

export const deleteTodoRequest = () => ({
  type: "DELETE_TODO_REQUEST"
})

export const deleteTodoSuccess = (content) => ({
  type: "DELETE_TODO_SUCCESS",
  payload: content
})

export const deleteTodoFailed = (error) => ({
  type: "DELETE_TODO_FAILURE",
  payload: error
})