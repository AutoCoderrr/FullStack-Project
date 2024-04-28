import { NavLink } from "react-router-dom";
import "./Navbar";
import { useAuth } from "../store/Auth";
import "../components/Navbar.css";
export const Navbar = () => {
  const { loggedIn } = useAuth();

  return (
    <>
      <header>
        <div className="contaier">
          <div className="logo-brand">
            <NavLink to="/">logo</NavLink>
          </div>
        </div>

        <nav>
          <ul>
            <li>
              {" "}
              <NavLink to="/"  activeClassName="active">Home</NavLink>
            </li>
            <li>
              {" "}
              <NavLink to="/details"  activeClassName="active">About</NavLink>
            </li>
            <li>
              {" "}
              <NavLink to="/contact"  activeClassName="active">Contact</NavLink>
            </li>
            <li>
              {" "}
              <NavLink to="/service"  activeClassName="active">Services</NavLink>
            </li>
            {loggedIn ? (
              <li>
                {" "}
                <NavLink to="/logout"  activeClassName="active">Logout</NavLink>
              </li>
            ) : (
              <>
                <li>
                  {" "}
                  <NavLink to="/register"  activeClassName="active">Register</NavLink>
                </li>
                <li>
                  {" "}
                  <NavLink to="/login" activeClassName="active">Login</NavLink>
                </li>
              </>
            )}
          </ul>
        </nav>
      </header>
    </>
  );
};
