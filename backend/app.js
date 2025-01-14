const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const connectToDatabase = require("./db/db");
connectToDatabase();

const userRoutes = require("./routes/user.routes");


app.get("/", (req, res) => {
  res.json({ message: "testing" });
});
app.use('/',userRoutes)


app.listen(process.env.PORT);
