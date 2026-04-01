import { useState } from "react";

import AddDeveloper from "./AddDeveloper";
import Developer from "./Developer";
import DisplayBios from "./DisplayBios";

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
      <DisplayBios developers={developers} />
      <AddDeveloper handleNewDeveloper={handleNewDeveloper} />
    </>
  );
}

export default App;
