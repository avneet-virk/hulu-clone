import React, { useState } from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Result from "./pages/result"
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";

function App() {
  const [selectedOption,setSelectedOption] =useState('');
  const [title,setTitle] =useState('');
  console.log(title,selectedOption)
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Nav setTitle={setTitle} setSelectedOption={setSelectedOption}/>} />
          <Route path="/:title" element={<Result title={title} selectedOption={selectedOption}/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
