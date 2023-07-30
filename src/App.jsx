import React, { useState } from "react";
import "./App.css";
import UserListview from "./view/userListview";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from "./view/create";
import Edit from "./view/edit";



function App() {
  const [count, setCount] = useState(0);

  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserListview />} />
          <Route path="/create" element={<Create />} />
          <Route path="/edit/:id" element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
