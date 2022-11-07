const httpServer = require("http").createServer();
const axios = require("axios");
const io = require("socket.io")(httpServer, {
    cors: {
        origin: "http://localhost:3000",
    },
});

httpServer.listen(8900);

const REACT_APP_API_URL = "http://localhost:5000";

io.on("connection", (socket) => {
    console.log("Connected...");

    socket.on("changeStatus", (data) => {
        axios
            .post(`${REACT_APP_API_URL}/todo/doneTodo`, data)
            .catch((err) => console.log(err));
    });

    socket.on("disconnect", () => {
        console.log("disconnected...");
    });
});
