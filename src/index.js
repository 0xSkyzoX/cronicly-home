import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import App from "./App";
import Register from "./components/pages/register";
import "./index.css"
const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
     <BrowserRouter>
     <Routes>
          <Route exact index element={<App />}/>
          <Route path="/register" element={<Register />}/> 
     </Routes>
     </BrowserRouter>
)