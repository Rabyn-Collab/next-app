import axios from 'axios'
import React from 'react'

export default async function TodoList() {
  const response = await axios.get('https://6837bb2a2c55e01d184aa831.mockapi.io/todos');
  const todos = response.data;
  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          <h1>{todo.title}</h1>
          <p>{todo.body}</p>
        </div>
      ))}

    </div>
  )
}
