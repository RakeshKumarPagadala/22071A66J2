const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
let items = []; // Simple in-memory storage
// GET all items
app.get("/items", (req, res) => {
res.json(items);
});
// POST a new item
app.post("/items", (req, res) => {
const newItem = { id: Date.now(), name: req.body.name };
items.push(newItem);

res.status(201).json(newItem);
});

app.listen(5000, () => console.log(`Server running on port 5000 succesfully`));