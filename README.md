# 90-Day Goal Tracker

A goal tracking web app built with **Node.js**, **Express**, **EJS**, and **SQLite**.  
The app helps users track time spent on specific goals (like studying or working out) over 30, 60, 90, 180, or 360 days.

## 🚀 Features

- Set custom goals with target hours and timelines
- Start and stop study/work sessions with a built-in timer
- Track total hours logged vs. planned hours
- Simple progress dashboard with daily/weekly stats
- MVC architecture for clean project structure

## 🛠️ Tech Stack

- **Backend:** Node.js + Express
- **Frontend:** EJS templates + Vanilla JavaScript
- **Database:** SQLite (via `sqlite3`)
- **Styling:** Custom CSS

## 📂 Project Structure

90-day-goal-tracker/
│
├── app.js # Main server
├── package.json
├── /src
│ ├── /controllers # Route logic
│ ├── /models # Database logic
│ ├── /routes # Express routes
│ ├── /views # EJS templates
│ └── /public # Static files (CSS/JS)
└── README.md

## ⚡ Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/YOUR-USERNAME/90-day-goal-tracker.git
cd 90-day-goal-tracker

npm install

node app.js

Visit 👉 http://localhost:3000
```
