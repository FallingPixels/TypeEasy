import { createServer } from "http";
import { Server, Socket } from "socket.io";
import lang from './lang.json';
const sessionStore = new Map();
const httpServer = createServer();
const io = new Server(httpServer, {
  cors: {
    origin: process.env.CORS_ORIGIN || "*",
    methods: ["GET", "POST"]
  }
});

function getSessions(userID: number): Map {
  const sessions = new Map();
  //Query the database, then store return sockets that belong to userID as a map
  return sessions;
}

//Insert a  session into the database
function addSession(socket: AppSocket) {
  const { userID } = socket.user;
}

// Delete a session from the database
function deleteSession(socket: AppSocket) {
  const { userID } = socket.user;

}

// Translate a string
async function Translate(content: string): string {
  return new Promise();
}




io.on("connection", (ioSocket: Socket) => {

  const socket = ioSocket as AppSocket;

  socket.on('login', (token) => {
    //Test the users token against the database and set the sockets user object
    //if authorized, add session to doc store
    addSession(socket);
  });

  socket.on('disconnect', (reason) => {
    deleteSession(socket);
  });

  socket.on('message', async (message: Message) => {
    const { sender, recievers, locale, content } = message;
    message.original = message.content;
    message.content = await Translate(content);
    recievers.forEach(reciever: User => {
      io.sockets.sockets.get(reciever).emit(message);
    })
  });

});


httpServer.listen(process.env.CHAT_PORT || 8080);
