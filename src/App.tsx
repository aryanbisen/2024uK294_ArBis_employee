import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Components/Pages/HomePage";
import LoginPage from "./Components/Pages/LoginPage";

import Navbar from "./Components/Organisms/Navbar";

function App() {
  return (
    <>
    hello
    <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
