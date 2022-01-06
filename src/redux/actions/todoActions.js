import { ADD_TODO, CLEAR_TODO_LIST, DELETE_TODO, TOGGLE_TODO } from "../types/todoTypes.js";

export const addTodo = (payload) => {
    return{
        type: ADD_TODO,
        payload:payload
    }
}

export const deleteTodo = (payload) => {
    return{
        type: DELETE_TODO,
        payload
    }
}

export const toggleTodo = (payload) => {
    return{
        type: TOGGLE_TODO,
        payload
    }
}

export const clearTodoList = () => {
    return{
        type: CLEAR_TODO_LIST,
    }
}