import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/Auth";
import {toast} from "react-toastify";
import { Footer } from "../components/Footer";

export const Register = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });
  const navigate = useNavigate();
  const { storeTokenInLocalStorage } = useAuth();

  const handleInput = (e) => {
    console.log(e);
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(user);
    try {
      const response = await fetch(`http://localhost:5000/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
       
      });
      console.log(JSON.stringify(user));
      const res_data = await response.json();
        console.log("responsefromserver  ", res_data.extraDetails);
      //this is after sending data to backend
      if (response.ok) {
        // const res_data = await response.json();
      
        //storing token context api
        storeTokenInLocalStorage(res_data.token);
        // localStorage.setItem('token',res_data.token);
        setUser({ username: "", email: "", phone: "", password: "" });
        toast("Registeration successful ");
        navigate("/");
      } else {
        toast(res_data.extraDetails);
        // alert("registeration failed ");
        // alert("error");
      }
      console.log(response);
    } catch (err) {
      console.log("register", err);
      toast("Registration failed");
    }
  };

  return (
    <>
      <section>
        <main>
          <div className="section-registration">
            <div className="container grid grid-two-cols">
              <div className="registeration image">
                <img
                  src="/organized-desk-with-copy-space_23-2148219270.avif"
                  alt="user is trying to regiter"
                  
                ></img>
              </div>
              <div className="registeration-form">
                <h1 className="main-heading  mb-3">registeration form </h1>
                <br />
                <form action="" onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="userName">  username </label>
                    <input
                      type="text"
                      name="username"
                      id="username"
                      placeholder="username"
                      autoComplete="off"
                      required
                      value={user.username}
                      onChange={handleInput}
                    />
                  </div>
                  <div>
                    <label htmlFor="email">Email </label>
                    <input
                      type="text"
                      name="email"
                      id="email"
                      placeholder="email"
                      autoComplete="off"
                      required
                      value={user.email}
                      onChange={handleInput}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone">PhoneNumber </label>
                    <input
                      type="number"
                      name="phone"
                      id="phone"
                      placeholder="phone"
                      autoComplete="off"
                      required
                      value={user.phone}
                      onChange={handleInput}
                    />
                  </div>
                  <div>
                    <label htmlFor="password">Password </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="password"
                      autoComplete="off"
                      required
                      value={user.password}
                      onChange={handleInput}
                    />
                  </div>

                  <br />
                  <button type="submit" className="btn btn-submit">
                    Register{" "}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
      <Footer></Footer>
    </>
  );
};
