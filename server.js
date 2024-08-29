const express = require("express");
const cors = require("cors");

const sequelize = require("./models");

const app = express();

//middleware

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routers

const adminRouter = require("./routes/adminRouter.js");
app.use("/", adminRouter);

const busRouter = require("./routes/busRouter.js");
app.use("/", busRouter);

//port

const PORT = process.env.PORT || 8080;

// Define a route for the root URL

app.get('/', (req, res) => {
    res.send('Welcome to the Home Page!');
});

//server

app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);


});
