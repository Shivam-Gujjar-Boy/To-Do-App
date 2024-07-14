const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 4000;

app.use(express.json());

const blogPostRoutes = require("./routes/posts");

app.use("/api/v1", blogPostRoutes);

app.listen(PORT, () => {
  console.log(`server started successfully at port number ${PORT}`);
});

//connect to database
const dbConnect = require("./config/database");
dbConnect();

//default Route
app.get("/", (req, res) => {
  res.send(`<h1>This is HOMEPAGE Nigger</h1>`);
});
