import type { NextApiRequest, NextApiResponse } from 'next'
import { connectToDatabase } from 'utils/database';
import * as argon2 from 'argon2';
import jwt from 'jsonwebtoken';

type Data = {
  credentials?: object;
  err?: string;
}

interface User {
  _id: string
  email: string;
  hashedPassword: string;
  userId: number;
}

interface Payload {
  userId: number;
  email: string;
}

export default async function handler (
  req:NextApiRequest,
  res:NextApiResponse <Data>
) {
  const { db } = await connectToDatabase();
  const { email, password }: {email: string, password: string} = req.body;

  if(!email || !password){
    res.status(400).json({err: 'email and password are required fields'});
  }

 const [user]: [user: User] = await db.collection('users').find({email}).toArray();

 if(!user){
   res.status(404).json({err: 'account does not exist'});
 }
 const { hashedPassword, userId } = user;
 return await argon2
              .verify(hashedPassword, password)
              .then((isMatching: boolean) => {
                if(!isMatching){
                  res.status(401).json({err: 'invalid login'});
                }
                const payload: Payload = { email, userId};
                const token = jwt.sign(payload, process.env.TOKEN_SECRET as string)

                const credentials = {token, credentials: payload }
                res.status(200).json(credentials);
              })
}
