'use client'

import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

export default function Client() {
  const router = useRouter();
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>hello jee client component</h1>
      <button onClick={() => router.push('/product')}>Go To Product Page</button>

    </div>
  )
}
