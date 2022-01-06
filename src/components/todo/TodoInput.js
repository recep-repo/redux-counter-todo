import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from '../../redux/actions/todoActions.js'

const TodoInput = () => {
  const [text, settext] = useState("")
  const dispatch = useDispatch()



  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log("hand", text);
    if(text){
    dispatch(addTodo(text))
    settext("")
  }

  };
  return (
    <form onSubmit={handleSubmit}>
      <input onChange={(e) => settext(e.target.value)}
      value={text} className="todo-input" type="text" placeholder="Add Todo" />
      <button className="add-button" onClick={handleSubmit}>
        Add
      </button>
    </form>
  );
};

export default TodoInput;
