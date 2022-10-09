import React, { useEffect, useState, useRef } from 'react'
import useScroll from '../hooks/useScroll';

export const List = () => {
    const [todos, setTodos] = useState([]);
    const [page, setPage] = useState(1);
    const limit = 20;
    const parentRef = useRef();
    const childRef = useRef();
    const intersected = useScroll(parentRef, childRef, () => fetchTodos(page, limit))
    
    function fetchTodos (page, limit) {
        fetch(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}&_page=${page}`)
            .then(response => response.json())
            .then(json => {
                setTodos(prev => [...prev, ...json]);
                setPage(prev => prev + 1)
            })
    }

  return (
    <div ref={parentRef} style={{height: '80vh', overflow:'auto'}}>
        {todos.map(todo => 
            <div key={todo.id} style={{border: '2px solid black', margin: 10}}>
                {todo.id} {todo.title}
            </div>
        )}
        <div ref={childRef} style={{height: 0, width: 0}}></div>
    </div>
  )
}
