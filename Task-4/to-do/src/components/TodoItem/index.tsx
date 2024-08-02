import React from 'react';
import { useState } from 'react';
import {toDoItem, btnContariner, editBtn, deleteBtn, spanEle} from './TodoItem.styles.ts';

interface TodoItemProps {
  todo: string;
  onEdit: (todo: string) => void;
  onDelete: (todo: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo,onEdit,onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTodo, setEditedTodo] = useState(todo);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    onEdit(editedTodo);
  };
  
  const handleCancelClick = () => {
    setIsEditing(false);
    setEditedTodo(todo);
  }

  return (
    <div>
      {isEditing ? (
        
        <div className={toDoItem} >
          <input type="text" className={spanEle} value={editedTodo} onChange={(e) => setEditedTodo(e.target.value)} />

          {/* <span contentEditable='true' className={spanEle} onInput={(e) =>setEditedTodo(e.currentTarget.innerText)}>{editedTodo}</span> */}

          <div className={btnContariner}>
            <button onClick={handleSave} className={editBtn} > Save </button>
            <button onClick={handleCancelClick} className={deleteBtn} > Cancel </button>
          </div>

        </div> ): 
        
        <div className={toDoItem}>

          <span className = {spanEle} > {todo} </span>

          <div className = {btnContariner}>
            <button onClick={handleEdit} className={editBtn}>Edit</button>
            <button onClick={() => onDelete(todo)} className={deleteBtn}>Delete</button>
          </div>

        </div>
      }
      
    </div>
  );
};

export default TodoItem;