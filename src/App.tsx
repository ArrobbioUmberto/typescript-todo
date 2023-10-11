import React, { useState } from 'react';
import './App.css';
import Input from './components/Input';
import TodoList from './components/TodoList'
import { Todo } from './model';
const App: React.FC = () => {
  const [todo, setTodo] = useState<string>('')
  const [list, setList] = useState<Todo[]>([])
  const addItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setList([...list, { id: Date.now(), todo: todo, isDone: false }])
      setTodo('')
    }
  }
  return (
    <div className="App">
      <header>
        <h1 className='title'>daily duty hub</h1>
        <Input todo={todo} setTodo={setTodo} addItem={addItem} />
        <TodoList list={list} setList={setList} />
      </header>
    </div>
  );
}

export default App;
