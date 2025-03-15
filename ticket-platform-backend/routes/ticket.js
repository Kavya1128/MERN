const express = require("express");
const Ticket = require("../models/Ticket");
const router = express.Router();

// Create Ticket
router.post("/", async (req, res) => {
  const ticket = new Ticket(req.body);
  await ticket.save();
  res.json(ticket);
});

// Get All Tickets
router.get("/", async (req, res) => {
  const tickets = await Ticket.find();
  res.json(tickets);
});

// Update Ticket Status
router.put("/:id", async (req, res) => {
  const ticket = await Ticket.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(ticket);
});

// Delete Ticket
router.delete("/:id", async (req, res) => {
  await Ticket.findByIdAndDelete(req.params.id);
  res.json({ message: "Ticket deleted" });
});

module.exports = router;
