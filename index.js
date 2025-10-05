const express = require("express");
const app = express();
const port = 8080;
var counter = 0;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/hello", (req, res) => {
  res.json({ message: "Hello i am working fine at ec2", counter: counter++ });
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Server listening at http://0.0.0.0:${port}`);
});
