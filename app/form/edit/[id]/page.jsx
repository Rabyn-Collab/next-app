import axios from 'axios';
import React from 'react'
import EditForm from '../../../_components/EditForm';


export default async function Page({ params }) {
  const { id } = await params;

  const response = await axios.get(`https://6837bb2a2c55e01d184aa831.mockapi.io/todos/${id}`);
  const todo = response.data;


  return (
    <div>
      <EditForm todo={todo} />

    </div>
  )
}
