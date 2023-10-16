import { NextApiRequest, NextApiResponse } from "next";
import { getUsers } from "@/app/firebase";
import { NextResponse } from "next/server";

export async function GET(
  req: NextApiRequest,
  res: NextApiResponse
) {
    try{
        const result = await getUsers();
        return NextResponse.json({ statusCode: 200, data: result });
    } catch (e) {
        return NextResponse.json({ statusCode: 500, e: 'failed to load data' });
    }
}