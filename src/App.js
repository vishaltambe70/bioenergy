import logo from "./logo.svg";
import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Modules/adminDash/dashboard";
import Login from "./Modules/login";
import DashboardUser from "./Modules/userDash/dashboard";
import UserDetails from "./Modules/adminDash/userDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/user-dashboard" element={<DashboardUser />} />
          <Route path="/user" element={<UserDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
