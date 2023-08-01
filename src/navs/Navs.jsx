import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import { useEffect } from "react";
import Sidebar from "../components/Sidebar";
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = ({ user, children }) => {
  if (!user) return <Navigate to='/login' replace />
  return <Outlet />;
}


function hoc(props) {
  console.log(props)
  return <>
    <Sidebar />
    {props}
  </>
}

function Navs() {
  const user = JSON.parse(localStorage.getItem("unGrayAuth"));
  const navigate = useNavigate();

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<ProtectedRoute user={user} />}>
        <Route path="/" element={hoc(<div><h1>Home</h1> <br/>please <b>click on Dashboard</b> for Dashboard Page</div>)} />
        <Route path="/dashboard" element={hoc(<Dashboard />)} />
        <Route path="/campaigns" element={hoc(<h1>Campaigns</h1>)} />
        <Route path="/flows" element={hoc(<h1>Flow</h1>)} />
        <Route path="/integrations" element={hoc(<h1>Integrations</h1>)} />
        <Route path="/customers" element={hoc(<h1>Customers</h1>)} />
      </Route>
    </Routes>
  );
}

export default Navs;
