import { useState } from 'react';
import './App.css';
import { Hover } from './components/Hover';
import { List } from './components/List';
import useInput from './hooks/useInput';

function App() {
  const username = useInput('')
  const password = useInput('')
  return (
    <div className="App">
      <input 
        {...username}
        type="text" 
        name="username"
        placeholder='Логин' 
      />
      <input 
        {...password}
        type="password" 
        name="password"
        placeholder='Пароль' 
      />
      <button onClick={() => console.log(username.value, password.value)}>Войти</button>
      <Hover></Hover>
      <List></List>
    </div>
  );
}

export default App;
