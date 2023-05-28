const Login = require ("./route/Login.js" );
const Register = require ("./route/Register");
const CheckSteak = require ("./route/CheckSteak");
const Gloden = require ("./route/Golden");
const History = require("./route/History")
const express = require("express");
const Update = require("./route/UpdateUser");
const Checkperday = require("./route/Checkperday");
const app = express();
const port = 8001;
const mysql = require("mysql2")
const bodyParser = require("body-parser");
const cookieParser =require("cookie-parser");
const session = require("express-session");
const bcrypt = require("bcrypt");
const cors = require("cors");
const Card = require("./route/Card");
const authMiddleware = require("./middlewares/authMiddleware.js");
const InsertHistories = require("./route/InsertHistories.js");
const DeleteHistory = require("./route/DeteleHistory.js");
const GetUset = require("./route/GetUser.js")
require("./database")


// const connection = mysql.createConnection({
//     host: "db.cshack.site",
//     port: "3306",
//     user: "group09",
//     password: "206220222",
//     database: "group09",
// });

// connection.connect(() => {
//     console.log("Database is connected");
// });

app.use(express.json());
app.use(cors({
  origin:['http://localhost:5173'],
  credentials: true
}));
app.use(cookieParser());


app.use(bodyParser.json({ type: "application/json" }));

app.listen(port, () => {
  console.log( `Server started successfully on port ${port}...` );
});

app.post("/register", Register);

app.patch("/account", authMiddleware, Update);

app.post("/login", Login);

app.get("/checkperday", authMiddleware, Checkperday);

app.get("/checkSteak", authMiddleware, CheckSteak);

app.get("/card", Card);

app.post("/history", authMiddleware, InsertHistories);
app.get("/history", authMiddleware, History);
app.delete("/history/:id", authMiddleware, DeleteHistory);

app.get("/golden", Gloden);

app.get("/user", GetUser);


app.get("/", (req, res) => {
    res.send("hello world");
});
