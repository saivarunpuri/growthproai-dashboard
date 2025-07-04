const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: "*", // Allow all origins for now
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(express.json());

const headlines = [
  "Why {name} is {location}'s Top Pick for 2025",
  "Discover What Makes {name} Stand Out in {location}",
  "How {name} Became the Talk of {location} in 2025",
  "Customers Love {name} – {location}'s Favorite Business",
  "The Secret Behind {name}'s Success in {location}",
];

app.get("/business-data", (req, res) => {
  res.json({ message: "Backend is working! Use POST for form data." });
});

app.post("/business-data", (req, res) => {
  const { name, location } = req.body;
  if (!name || !location) {
    return res.status(400).json({ error: "Missing name or location" });
  }

  const rating = (Math.random() * 1.5 + 3.5).toFixed(1); // 3.5 to 5.0
  const reviews = Math.floor(Math.random() * 200 + 20); // 20 to 220
  const template = headlines[Math.floor(Math.random() * headlines.length)];
  const headline = template
    .replace("{name}", name)
    .replace("{location}", location);

  res.json({ rating, reviews, headline });
});

app.get("/regenerate-headline", (req, res) => {
  const { name, location } = req.query;
  if (!name || !location) {
    return res.status(400).json({ error: "Missing query params" });
  }

  const template = headlines[Math.floor(Math.random() * headlines.length)];
  const headline = template
    .replace("{name}", name)
    .replace("{location}", location);

  res.json({ headline });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
