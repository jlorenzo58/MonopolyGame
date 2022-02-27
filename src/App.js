import React, { Fragment } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Launch from "./components/Launch"
import Players from "./components/AddPlayers"

function App() {
  return (
    <BrowserRouter>
      <Routes>
       <Route path ="/" exact element={<Launch />} />
       <Route path ="/players" element={<Players />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
