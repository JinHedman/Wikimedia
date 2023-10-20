"use client"
import { signIn } from 'next-auth/react';

export default function Login() {
  return (
    <>
      <button className="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900" type="button" onClick={() => signIn()}>Sign In</button>
    </>
  )
}