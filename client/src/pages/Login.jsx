import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/Auth";
import { toast } from "react-toastify";
import { Footer } from "../components/Footer";

export const Login = () => {
  const [user, setUser] = useState({
    email: "",
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
    console.log(e);
    e.preventDefault();
    console.log(user);
    //check the data forst from database
    try {
      const response = await fetch(`http://localhost:5000/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      //this is after sending data to backend
      if (response.ok) {
        const res_data = await response.json();
        // console.log("login form  ", res_data);
        storeTokenInLocalStorage(res_data.token);
        // localStorage.setItem('token',res_data.token);
        toast("login successfull");
        setUser({ email: "", password: "" });
        // toast("login successfull");
        navigate("/");
      } else {
        toast("invalid Credentials please check email and password ");
      }
      // console.log(response,"LOGIN FORM err");
    } catch (error) {
      console.log(error, " login form  error");
    }
  };

  return (
    <>
      <section>
        <main>
          <div className="section-registration">
            <div className="container grid grid-two-cols">
              <div className="login-image">
                <img
                  src="/organized-desk-with-copy-space_23-2148219270.avif"
                  alt="user hoing in to the applicaton "
                  width="100%"
                  height="100%"
                ></img>
              </div>
              <div className="Login-form">
                <h1 className="main-heading  mb-3">Login User </h1>
                <br />
                <form action="" onSubmit={handleSubmit}>
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
                    Login
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
