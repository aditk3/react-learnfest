import { useState } from "react";

import { Route, Routes } from "react-router-dom";
import AddDeveloper from "./screens/AddDeveloper";
import Developer from "./models/Developer";
import DisplayBios from "./screens/DisplayBios";
import Home from "./screens/Home";
import Navbar from "./components/Navbar";

const initialDevs = [
  new Developer(1, "Adit", "Kapoor", "TS", 2016),
  new Developer(3, "Tim", "Cook", "HTML", 1980),
  new Developer(2, "Joe", "Rock", "JS", 2000),
];

function App() {
  const [developers, setDevelopers] = useState(initialDevs);

  const handleNewDeveloper = (dev) => {
    dev.id = developers.length + 1;
    console.log(dev);
    setDevelopers([...developers, dev]);
  };

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/developers"
          element={<DisplayBios developers={developers} />}
        />
        <Route
          path="/add-developer"
          element={<AddDeveloper handleNewDeveloper={handleNewDeveloper} />}
        />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
