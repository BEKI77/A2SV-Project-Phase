import React from 'react';
import TodoList from './components/TodoList';
import Header from './components/Header';

const App: React.FC = () => {
  return (
    <div className='App'>
      <Header />
      <TodoList />
    </div>
  );
};

export default App;