import React, { useState } from 'react';
import './App.css';
import Input from './components/Input';
import { Todo } from './model';
const App: React.FC = () => {
  const [todo, setTodo] = useState<string>('')
  const [list, setList] = useState<Todo[]>([])
  return (
    <div className="App">
      <header>
        <h1 className='title'>taskyfy</h1>
        <Input todo={todo} setTodo={setTodo} />
      </header>
    </div>
  );
}

export default App;
