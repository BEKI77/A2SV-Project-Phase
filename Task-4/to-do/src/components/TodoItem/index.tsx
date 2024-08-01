import React from 'react';
import { useState } from 'react';
import {toDoItem, btnContariner, editBtn, deleteBtn} from './TodoItem.styles.ts';

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
          <input
            type="text"
            value={editedTodo}
            onChange={(e) => setEditedTodo(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
          <button onClick={handleCancelClick}>Cancel</button>
        </div>
      ): <div className={toDoItem}>
        <span>{todo}</span>
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