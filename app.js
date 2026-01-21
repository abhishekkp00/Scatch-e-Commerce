const express = require('express');
const app = express();
const mongooseConnection = require('./config/mongoose-connections');
const usersRouter = require('./routes/usersRouter');
const ownersRouter = require('./routes/ownersRouter');
const productsRouter = require('./routes/productsRouter');

const cookieParser = require('cookie-parser');
const path = require('path');

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.use('/public', express.static(path.join(__dirname, 'public')));


app.use("/users",usersRouter);
app.use("/owners",ownersRouter);
app.use("/products",productsRouter);


app.get("/", (req, res) => {
    res.send("Welcome to E-commerce API");
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});