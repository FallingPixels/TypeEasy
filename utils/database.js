import { MongoClient } from 'mongodb';

const { MONGODB_URI, MONGODB_DB, TOKEN_SECRET } = process.env;
if(!MONGODB_URI){
  throw new Error('Define the MONGODB_URI environment variable')
}

if(!MONGODB_DB){
  throw new Error('Define the MONGODB_DB environment variable')
}

if(!TOKEN_SECRET){
  throw new Error('Define the TOKEN_SECRET environment variable');
}

let cachedClient= null;
let cachedDb= null;

export async function connectToDatabase() {
  if(cachedClient && cachedDb) {
    return {
      client: cachedClient,
      db: cachedDb
    }
  }

const opts = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};


let client = new MongoClient(MONGODB_URI, opts);

await client.connect();

let db = client.db(MONGODB_DB);

cachedClient = client;
cachedDb = db;

return {
  client: cachedClient,
  db: cachedDb
  }
}
