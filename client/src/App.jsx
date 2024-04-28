import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import { Home } from "./pages/Home";

import { Contact } from "./pages/Contact";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Details } from "./pages/Details";
import { Services } from "./pages/Services.jsx";

import { Navbar } from "./components/Navbar";
import { Error } from "./pages/Error";
import { Logout } from "./pages/Logout";
import { AdminLayout } from "./components/layouts/admin-layout.jsx";
import { AdminContacts } from "./pages/Admin-contacts.jsx";
import { AdminUsers } from "./pages/Admin-users.jsx";
// import { Footer } from "./components/Footer/Footer.jsx";

function App() {
  return (
    <>
    
      <BrowserRouter>
        <Navbar></Navbar>
        {/* <Footer></Footer> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details" element={<Details />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/services" element={<Services />} /> */}
          <Route path="/services" element={<Services />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="*" element={<Error />} />
          {/* //nested route  */}
          {/* <Route path="/admin" element={<adminLayout/>}  </Route> */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="users" element={<AdminUsers/>}></Route>
            <Route path="contacts" element={<AdminContacts/>}></Route>
          </Route>
        </Routes>
       
      </BrowserRouter>
    </>
  );
}

export default App;
