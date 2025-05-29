import React, { Suspense } from 'react'
import TodoList from '../_components/TodoList'

export default function Page() {

  return (
    <div>

      <h1 className='text-red-500 font-bold'>Welcome To Todo Page </h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias a quo vitae voluptate ratione labore sapiente at magnam optio fugit nobis, perferendis necessitatibus numquam, quae deserunt corrupti soluta sed iure?</p>

      <Suspense fallback={<h1>Loading.......</h1>}>
        <TodoList />
      </Suspense>


    </div>
  )
}
