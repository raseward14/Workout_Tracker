const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const routes = require('./controllers');

const PORT = process.env.PORT || 3000;

const db = require("./models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutdb", { useNewUrlParser: true });

// app.get routes
// app.get("/notes", (req, res) => {
//     db.Note.find({})
//       .then(dbNote => {
//         res.json(dbNote);
//       })
//       .catch(err => {
//         res.json(err);
//       });
//   });
  
//   app.get("/user", (req, res) => {
//     db.User.find({})
//       .then(dbUser => {
//         res.json(dbUser);
//       })
//       .catch(err => {
//         res.json(err);
//       });
//   });

// Start the server
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});