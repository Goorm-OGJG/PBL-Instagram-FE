import React from "react";
import New from "./pages/New/New";
import { Route, Routes } from "react-router";

function App() {
  return (
    <Routes>
      <Route path="/" element={<New />}></Route>
    </Routes>
  );
}

export default App;
