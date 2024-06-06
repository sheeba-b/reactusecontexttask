import React, { useState, useContext } from 'react';
import { TodoContext } from './TodoContext';

const TodoItem = ({ todo }) => {
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(todo.text);
  const { deleteTodo, updateTodo } = useContext(TodoContext);

  const handleDelete = () => {
    deleteTodo(todo.id);
  };

  const handleUpdate = () => {
    updateTodo(todo.id, text);
    setEditing(false);
  };

  return (
    <div>
      {editing ? (
        <input 
          type="text" 
          value={text} 
          onChange={e => setText(e.target.value)} 
          onBlur={handleUpdate} 
          autoFocus 
        />
      ) : (
        <>
          <span>{todo.text}</span>
          <button onClick={() => setEditing(true)}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </>
      )}
    </div>
  );
};

export default TodoItem;



