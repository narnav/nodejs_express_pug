const express = require("express");
const app = express();
const port = 3000;

app.set("views", "./views");
app.set("view engine", "pug");

app.get("/about/about", (req, res) => {
  res.render("about");
});

app.get("/:id", (req, res) => {
  console.log(req.params.id);
  const memberDetails = {
    member: ["itay", "maya", "samp"][+req.params.id],
    planet: "earth",
  };
  res.render("samp", memberDetails);
});
// app.get("/", (req, res) => {
//   res.status(200).sendFile(__dirname + "/index.html");
// });

app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});
