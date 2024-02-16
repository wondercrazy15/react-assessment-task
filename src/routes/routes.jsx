import React from "react";
import { Routes, Route } from "react-router-dom";
import Employee from "../pages/Dashboard/Employee/Employee";
import Mainlayout from "../layout/Dashboard/Mainlayout";
import Dashboard from "../pages/Dashboard/Home/Dashboard";

function MainRoutes() {
  return (
    <div>
      <Routes>
        <Route  element={<Mainlayout />}>
          <Route path='/' element={<Dashboard/>} />
          <Route path='/employee' element={<Employee />} />
        </Route>
      </Routes>
    </div>
  )
};

export default MainRoutes;
