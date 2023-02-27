const express = require("express");
const app = express();
const port = 4000;

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));

app.post("/signup", (req, res) => {
  console.log(req.body);
  res.send("アカウント登録しました。");
});

app.listen(port, () => {
  console.log(`Server is running on  http://localhost:${port}`);
});
