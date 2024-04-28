import { NavLink, Navigate, Outlet } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { useAuth } from "../../store/Auth";

export const AdminLayout = () => {

  const { user, isLoading } = useAuth();
  console.log("admin layout ",user);

if(isLoading){
  return <h1>loading...</h1>
}

  if(!user.isAdmin){
    return <Navigate to="/"></Navigate>
  }

  return <>
  <header>
    <div className="container">
        <nav>
            <ul>
                <li> <NavLink to="/admin/users"><FaUser />users</NavLink>  </li>
                <li> <NavLink to="/admin/contacts"> contacts</NavLink> </li>
                <li><NavLink to="/service"> service </NavLink></li>
                <li><NavLink to="/"> Home</NavLink></li>
            </ul>
        </nav>

    </div>
  </header>
  <Outlet/>
  </>
};
