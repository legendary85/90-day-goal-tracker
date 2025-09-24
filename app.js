const express = require("express");
const path = require("path");
const dashboardRoutes = require("./src/routes/dashboard.routes");



const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "src/views"));
app.use(express.static(path.join(__dirname, "src/public")));

app.use("/", dashboardRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});


