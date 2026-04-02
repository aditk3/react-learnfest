import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
            <div className="navbar-nav">
            <NavLink className="nav-link" to="/">
                Home
            </NavLink>
            <NavLink className="nav-link" to="/developers">
                Developers
            </NavLink>
            <NavLink className="nav-link" to="/add-developer">
                Add Developer
            </NavLink>
            </div>
        </nav>
    )
}