const express = require("express");
const app = express();
const port = 8080;
var counter = 0;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/hello", (req, res) => {
  res.json({ message: "Hello i am working fine at ec2", counter: counter++ });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
