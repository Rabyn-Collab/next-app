import React from 'react'
import { getPosts } from '../_lib/action'

//export const revalidate = 10;

export default async function Page() {
  const { posts } = await getPosts();


  return (
    <div>

      {posts.map((post) => (
        <div key={post.id} className='shadow-xl max-w-[300px] p-5 mb-5 space-y-3'>
          <h1>{post.name}</h1>
          <img className='h-[100px] w-[100px]' src={post.avatar} alt="" />
          <p>{post.email}</p>
        </div>
      ))}

    </div>
  )
}
