import { useContext } from "react";
import { NavLink } from "react-router-dom";
import AuthContext from "../contexts/auth";

export default function Navbar() {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
      <div className="navbar-nav">
        <NavLink className="nav-link" to="/">
          Home
        </NavLink>
        <NavLink className="nav-link" to="/developers">
          Developers
        </NavLink>
        {isLoggedIn ? (
          <>
            <NavLink className="nav-link" to="/add-developer">
              Add Developer
            </NavLink>
            <NavLink
              className="nav-link"
              to="/"
              onClick={() => setIsLoggedIn(false)}
            >
              Logout
            </NavLink>
          </>
        ) : (
          <NavLink className="nav-link" to="/login">
            Login
          </NavLink>
        )}
      </div>
    </nav>
  );
}
