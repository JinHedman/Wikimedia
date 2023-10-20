"use client"
import { signIn } from 'next-auth/react';

export default function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <button className="transition duration-200 bg-sky-500 hover:bg-sky-700 text-white text-sm leading-6 font-medium py-2 px-3 mx-1 rounded-lg" type="button" onClick={() => signIn()}>Sign In</button>
        <button className="transition duration-200 bg-sky-500 hover:bg-sky-700 text-white text-sm leading-6 font-medium py-2 px-3 mx-1 rounded-lg" type="button">Already have an account?</button>
    </div>
  )
}