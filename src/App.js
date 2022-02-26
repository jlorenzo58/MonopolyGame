import React, { Fragment } from "react";
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Launch from "./components/Launch"

function App() {
  return (
    <BrowserRouter>
      <Routes>
       <Route path ="/" exact element={<Launch />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
