import { useState } from "react";

import PropTypes from "prop-types";
import AuthContext from ".";

const AuthContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const context = {
    isLoggedIn,
    setIsLoggedIn,
  };

  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
};

AuthContextProvider.propTypes = {
  children: PropTypes.object,
};

export default AuthContextProvider;
