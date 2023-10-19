"use client"
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { signIn, useSession } from 'next-auth/react'

export default function Home() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
          <button
            className="transition duration-300 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-1"
            onClick={() => signIn('google')}>
                Sign-in with Google
          </button>

      
    </main>
  )
}
