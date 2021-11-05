import io from "socket.io-client";
import SocketioP2PStatic from "socket.io-p2p";
const socket = io('http://localhost:8080');
const p2p = new SocketioP2PStatic(socket);
export { p2p, socket };
