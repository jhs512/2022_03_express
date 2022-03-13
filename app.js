import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("안녕하세요.");
});

app.get("/user-info", (req, res) => {
  res.json({
    id: 1,
    username: "홍길동",
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
