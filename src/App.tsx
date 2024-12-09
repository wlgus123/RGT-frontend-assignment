import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AddBookPage from "./AddBookPage.tsx";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AddBookPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
