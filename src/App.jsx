import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import AddDeveloper from "./screens/AddDeveloper";
import DisplayBios from "./screens/DisplayBios";
import Home from "./screens/Home";
import { useContext } from "react";
import AuthContext from "./contexts/auth";
import ErrorScreen from "./screens/ErrorScreen";
import Login from "./screens/Login";

function App() {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <>
      <Navbar />

      <div className="container py-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/developers" element={<DisplayBios />} />
          <Route path="/login" element={<Login />} />
          {isLoggedIn && (
            <Route path="/add-developer" element={<AddDeveloper />} />
          )}
          <Route path="*" element={<ErrorScreen />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
