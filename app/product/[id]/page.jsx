import { redirect } from 'next/navigation';
import React from 'react'

export default async function Page({ params }) {
  const { id } = await params;
  // if (id == '100') {
  //   redirect('/product');
  // }
  return (
    <div>
      <h1>THis is product Detail Page</h1>
    </div>
  )
}
