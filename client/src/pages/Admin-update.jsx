import { useState, useEffect } from "react";
import { useAuth } from "../store/Auth";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

export const AdminUpdate = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    phone: "",
  });

  const params = useParams(); // Access URL parameters
  const authorizationToken = useAuth(); // Access authorization token from context

  const getSingleUserData = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/admin/users/${params.id}`,
        {
          method: "GET",
          headers: {
            Authorization: authorizationToken,
          },
        }
      );
      const userData = await response.json();
      setData(userData); // Set retrieved user data to state
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleUserData();
  }, []); // Fetch user data on component mount

  const handleInput = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:5000/api/admin/users/update/${params.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: authorizationToken,
          },
          body: JSON.stringify(data),
        }
      );
      if (response.ok) {
        toast.success("User updated successfully");
      } else {
        toast.error("Failed to update user");
      }
    } catch (error) {
      console.log(error);
      toast.error("An error occurred while updating user");
    }
  };

  return (
    <section>
      <main>
        <div className="section-registration">
          <div className="container grid grid-two-cols">
            <div className="registeration image"></div>
            <div className="update user data">
              <h1 className="main-heading mb-3">Update User Data</h1>
              <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Username"
                    autoComplete="off"
                    required
                    value={data.username}
                    onChange={handleInput}
                  />
                </div>
                <div>
                  <label htmlFor="email">Email</label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Email"
                    autoComplete="off"
                    required
                    value={data.email}
                    onChange={handleInput}
                  />
                </div>
                <div>
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    placeholder="Phone Number"
                    autoComplete="off"
                    required
                    value={data.phone}
                    onChange={handleInput}
                  />
                </div>
                <button type="submit" className="btn btn-submit">
                  Update
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};
