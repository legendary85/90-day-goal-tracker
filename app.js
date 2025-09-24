const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Set EJS as template engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "src/views"));

// Serve static files
app.use(express.static(path.join(__dirname, "src/public")));

// Routes
app.get("/", (req, res) => {
  res.render("dashboard", { title: "90-Day Goal Tracker" });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});

