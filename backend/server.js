import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5000;

// allow frontend to fetch from backend
app.use(cors());

// test route
app.get("/", (req, res) => {
  res.send("Air Auravia API is running...");
});

// stats route (mock data for now)
app.get("/stats", (req, res) => {
  const data = {
    total_flights: 42,
    total_hours: 128,
    total_passengers: 9560,
  };
  res.json(data);
});

app.listen(PORT, () => console.log(`✅ Backend running on port ${PORT}`));
