import express from "express";

const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Air Auravia API is running...");
});

app.listen(PORT, () => console.log(`✅ Backend running on port ${PORT}`));
