import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import TicketList from "./components/TicketList";
import TicketForm from "./components/TicketForm";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<TicketList />} />
          <Route path="/new" element={<TicketForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
