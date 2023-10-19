"use client"

import { signOut, useSession } from 'next-auth/react'

export default function Home() {
  const session = useSession();
  return (
    <>
      <div>{session?.data?.user?.name}</div>
      <button 
      className="transition duration-300 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-1"
      type="button"
      onClick={() => signOut()}>Sign out</button>
    </>
  )
}