import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <h2>Ticket Platform</h2>
      <Link to="/">View Tickets</Link>
      <Link to="/new">Raise a Ticket</Link>
    </nav>
  );
};

export default Navbar;
