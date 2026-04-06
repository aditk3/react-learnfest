import PropTypes from "prop-types";
import { useState } from "react";
import DevelopersContext from ".";

function DevelopersContextProvider({ children }) {
  const [developers, setDevelopers] = useState([]);

  const context = {
    developers,
    setDevelopers,
  };

  return (
    <DevelopersContext.Provider value={context}>
      {children}
    </DevelopersContext.Provider>
  );
}

DevelopersContextProvider.propTypes = {
  children: PropTypes.object,
};

export default DevelopersContextProvider;
