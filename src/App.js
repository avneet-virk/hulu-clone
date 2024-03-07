import React from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Result from "./pages/result"
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Nav/>} />
          <Route path="/:title" element={<Result/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
