const express = require("express");
const path = require("path");
const http = require("http");
const socketIo = require("socket.io")

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

io.on("connection", socket => {
    console.log(`new user connected ${socket.id}`)
})
const PORT = 3001;


app.use(express.static(path.join(__dirname, 'public')));
server.listen(PORT, () => console.log(`server listing on port ${PORT}`));

// 15:00