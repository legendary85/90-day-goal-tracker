const goals = require("../models/goals.data");

exports.showDashboard = (req, res) => {
  res.render("dashboard", {
    title: "90-Day Goal Tracker",
    goals: goals
  });
};
