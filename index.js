
const express = require("express");

const app = express();

const noteRoutes = require("./routes/noteRoutes");


// Middleware

app.use(express.json());


// API Routes

app.use("/api/notes", noteRoutes);


// Home Route

app.get("/", (req, res) => {

  res.send("Notes API is running successfully");

});


// Start Server

const PORT = 5000;

app.listen(PORT, () => {

  console.log(`Server running on http://localhost:${PORT}`);

});
