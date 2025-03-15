import React, { useEffect, useState } from "react";
import axios from "axios";

const TicketList = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/tickets")
      .then((response) => setTickets(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h2>All Tickets</h2>
      {tickets.map((ticket) => (
        <div key={ticket._id}>
          <h3>{ticket.title}</h3>
          <p>{ticket.description}</p>
        </div>
      ))}
    </div>
  );
};

export default TicketList;
