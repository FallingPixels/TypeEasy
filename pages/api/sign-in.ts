import type { NextApiRequest, NextApiResponse } from 'next'
import { connectToDatabase } from '../../utils/database';
import * as argon2 from 'argon2';
type Data = {
  payload?: object;
  err?: string;
}

export default async function handler (
  req:NextApiRequest,
  res:NextApiResponse
) {
  const { db } = await connectToDatabase();

  const { email, password }: {email: string, password: string} = req.body;

  if(!email || !password){
    res.status(400).json({err: 'email and password are required fields'});
  }

 const user: [] = await db.collection('users').find({email}).toArray();
 if(!user){
   res.status(404).json({err: 'account does not exist'});
 }


}
