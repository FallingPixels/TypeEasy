import { createServer } from "http";
import { Server, Socket } from "socket.io";
var p2p = require('socket.io-p2p-server').Server;
const httpServer = createServer();
const io = new Server(httpServer, {
  cors: {
    origin: process.env.CORS_ORIGIN || "*",
    methods: ["GET", "POST"]
  }
});

io.use(p2p);

io.on("connection", (socket: Socket) => {
  console.log("a user connected");
});

httpServer.listen(process.env.CHAT_PORT || 8080);
