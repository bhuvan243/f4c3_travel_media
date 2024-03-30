import logo from "./logo.svg";
import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/components/Navbar";
import Home from "./components/Home";
import Display from "./components/DisplayDetails";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/item/:id" element={<Display />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
