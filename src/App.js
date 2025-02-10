import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cards from "./Components/Cards/Cards";
import { MyProvider } from "./Context";

const App = () => {
  return (
    <MyProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Cards />} />
        </Routes>
      </BrowserRouter>
    </MyProvider>
  );
};

export default App;
