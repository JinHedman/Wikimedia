"use client"
import Image from 'next/image';
import { signIn, signOut, useSession } from 'next-auth/react';


export default async function Home() {
  const session = useSession();

  return (
    <>
      <div>{session?.data?.user?.name}</div>
      <button className="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900" type="button" onClick={() => signOut()}>Sign Out</button>
    </>
  )
}
