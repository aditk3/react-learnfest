import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import AddDeveloper from "./screens/AddDeveloper";
import DisplayBios from "./screens/DisplayBios";
import Home from "./screens/Home";

function App() {
  return (
    <>
      <Navbar />

      <div className="container py-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/developers" element={<DisplayBios />} />
          <Route path="/add-developer" element={<AddDeveloper />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
