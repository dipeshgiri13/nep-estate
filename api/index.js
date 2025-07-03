import express from "express";
const app = express();

console.log("✅ App ");

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
