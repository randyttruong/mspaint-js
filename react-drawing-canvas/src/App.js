import './App.css';
import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import DrawingPage from "./pages/DrawingPage/DrawingPage"
import Gallery from "./pages/Gallery/Gallery"
import NewDrawing from "./pages/NewDrawing/NewDrawing"
import LandingPage from './pages/LandingPage/LandingPage';
import  ConstructionPage from './pages/ConstructionPage/ConstructionPage'


/*
 * 
 * @component
 * This file represents the entryway for the application. 
 * Here, I just define the routes for all of the pages within the 
 * application. 
 * 
 * @params
 * None 
 * 
 */

function App() {

  const pages = [ 
    "/",
    "/DrawingPage",
    "/Gallery",
    "/NewDrawing"
  ];

  return (
    <>
      <Router>
        <Routes>
          <Route path={"/"} element={<LandingPage />} />
          <Route path={"/DrawingPage"} element={<DrawingPage/>} />
          <Route path={"/Gallery"} element={<ConstructionPage/>} />
          <Route path={"/NewDrawing"} element={<NewDrawing/>} />

        </Routes>
      </Router>
    </>
  );
}

export default App;