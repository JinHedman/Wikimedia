"use client"
import Image from 'next/image';
import { signIn, signOut, useSession } from 'next-auth/react';


export default function Home() {
  const session = useSession();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">

      <div>{session?.data?.user?.name}</div>
      <button className="transition duration-200 bg-sky-500 hover:bg-sky-700 text-white text-sm leading-6 font-medium py-2 px-3 mx-1 rounded-lg" type="button" onClick={() => signOut()}>Sign Out</button>
    </div>
  )
}
