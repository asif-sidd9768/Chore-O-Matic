const BASE_URL = "https://tiny-pink-turkey-tutu.cyclic.app/";
import axios from "axios"

const addTodoService = async (content) => {
  const response = await axios.post(`${BASE_URL}/api/todo`, content)
  return response
}

const editTodoService = async(todoId, userId) => {
  const response = await axios.post(`${BASE_URL}/api/todo/edit/${todoId}`, {userId})
  return response
}

const deleteTodoService = async (data) => {
  const response = await axios.delete(`${BASE_URL}/api/todo`, {data})
  return response
}


export { addTodoService, deleteTodoService, editTodoService }