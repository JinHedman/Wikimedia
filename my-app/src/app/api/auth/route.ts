// pages/api/auth/register.ts
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase'; // Import your Firebase authentication instance
import type { NextApiRequest, NextApiResponse} from 'next';
import { NextResponse } from "next/server";


export async function POST(
    req: NextApiRequest, 
    res: NextApiResponse
    ){
  const { email, password } = req.body;

  try {
    // Register the user using Firebase in a secure way
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return NextResponse.json({ statusCode: 201, user: userCredential.user });
  } catch (error) {
    return NextResponse.json({ statusCode: 400, error: error });
  }
};
