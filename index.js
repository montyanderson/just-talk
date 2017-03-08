const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);

app.use(express.static(__dirname + "/static"));

io.on("connection", socket => {
	socket.on("speech", text => {
		socket.broadcast.emit("text", text);
	});
});

server.listen(8080);
