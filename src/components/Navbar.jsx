import { useContext } from "react";
import { NavLink } from "react-router-dom";
import AuthContext from "../contexts/auth";

export default function Navbar() {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark border-bottom">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#devBiosNav"
          aria-controls="devBiosNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="devBiosNav">
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
        </div>
      </div>
    </nav>
  );
}
