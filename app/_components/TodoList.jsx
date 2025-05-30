import axios from 'axios'
import React from 'react'
import RemoveTodo from './RemoveTodo';

export default async function TodoList() {
  const response = await axios.get('https://6837bb2a2c55e01d184aa831.mockapi.io/todos');
  const todos = response.data;

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id} className='shadow-xl max-w-[300px] p-5 mb-5 space-y-3'>
          <h1>{todo.title}</h1>
          <p>{todo.body}</p>
          <RemoveTodo id={todo.id} />
        </div>
      ))}

    </div>
  )
}
