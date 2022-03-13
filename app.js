import express from "express";
import mysql from "mysql2/promise";

// Create the connection pool. The pool-specific settings are the defaults
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "express_sample1",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("안녕하세요.");
});

app.get("/articles", async (req, res) => {
  const [rows] = await pool.query(
    "SELECT * FROM article ORDER BY id DESC LIMIT 2"
  );

  res.json(rows);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
