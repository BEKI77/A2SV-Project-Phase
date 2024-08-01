import React, { useState } from 'react';
import TodoItem from '../TodoItem';
import { todoListStyles, addButton , inputBar, inputSpace, header} from './TodoList.styles.ts';

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<string[]>([]);
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, newTodo]);
      setNewTodo('');
    }
  };

  const handleEditTodo = (todo: string, newTodo: string) => {
    setTodos(prevTodos => prevTodos.map(t => t === todo ? newTodo : t));
  };
  const handleDeleteTodo = (todo: string) => {
    setTodos(todos.filter((t) => t !== todo));
  };

  return (
    <>
      <div className={todoListStyles}>
        <h2 className={header}>Task List</h2>
        {todos.map((todo) => (
        <TodoItem key={todo} todo={todo} onEdit={(newTodo) => handleEditTodo(todo,newTodo)} onDelete={handleDeleteTodo} />
        ))}
      </div>
      <div className = {inputBar}>
        <input className={inputSpace} type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)}/>
        <button onClick={handleAddTodo} className={ addButton}> Add </button>
      </div>
    </>
    
  );
};

export default TodoList;