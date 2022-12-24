const express = require("express");
const { createServer } = require("http");
const socketIo = require("socket.io");
const { engine } = require("express-handlebars");

const app = express();
const server = createServer(app);
const io = socketIo(server);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

// Products array initialization.
const products = [];
// Messages array initialization.
const messages = [];

app.get("/", (req, res) => {
  res.render("products");
});

io.on("connection", (client) => {
  // Send all products from products array.
  client.emit("products", products);

  // Send all messages from messages array
  client.emit("messages", messages);

  // Receive a product.
  client.on("new-product", (product) => {
    const id = products ? products.length + 1 : 1;
    // Add product in products array.
    products.push({ ...product, id });

    // Send the new product.
    io.sockets.emit("product-added", { ...product, id });
  });

  // Receive a message.
  client.on("new-message", (message) => {
    const date = new Date().toLocaleString();
    // Add message in messages array.
    messages.push({ ...message, date });

    // Send the new message.
    io.sockets.emit("message-added", { ...message, date });
  });
});

server.listen(8080);
