'use client';

import { useRouter } from 'next/navigation';
import React from 'react'

export default function Error({ error, reset }) {

  const router = useRouter();
  return (
    <div>

      <h1>{error.message}</h1>
      <button onClick={() => router.back()}>GO Back</button>
      <br />
      <button onClick={reset}>Try again</button>

    </div>
  )
}
