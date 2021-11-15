import type { NextApiRequest, NextApiResponse } from 'next'
import { connectToDatabase } from 'utils/database';
import * as argon2 from 'argon2';

type Data = {
  user?: object;
  err?: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { db }  = await connectToDatabase();

  const {email, password }: {email: string, password: string}  = req.body;

  if(!email || !password){
    res.status(400).json({err:'email and password are required fields'});
  }
  const existingUser: [] = await db.collection('users').find({email}).toArray();
  if(existingUser) {
    res.status(401).json({err: 'email already exists' });
  }
  const user = await argon2
    .hash(password)
    .then((hashedPassword: string) =>  db.collection('users')
                                           .insertOne({email, hashedPassword}));
  res.status(201).json(user);
}
