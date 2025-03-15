import React, { useState } from "react";
import axios from "axios";

const TicketForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/tickets", { title, description });
    alert("Ticket Created!");
    setTitle("");
    setDescription("");
  };

  return (
    <div>
      <h2>Create a Ticket</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default TicketForm;
