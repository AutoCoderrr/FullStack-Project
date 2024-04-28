import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../store/Auth";
import { toast } from "react-toastify";

export const AdminUsers = () => {
  const [users, setUsers] = useState([]);
  const { authorizationToken } = useAuth();

  const getAllUsersData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/admin/users", {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteUser = async (id) => {
    try {
         const response = await fetch(
        `http://localhost:5000/api/admin/users/delete/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: authorizationToken,
          },
        }
      );
      if (response.ok) {
        toast.success("User deleted successfully");
        getAllUsersData(); // Refresh user data after deletion
      } else {
        toast.error("Failed to delete user");
      }
    } catch (error) {
      console.log(error);
      toast.error("An error occurred while deleting user");
    }
  };

  useEffect(() => {
    getAllUsersData();
  }, []);

  return (
    <section>
      <div>
        <h1>Admin User Data</h1>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>Phone</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>
                  <Link to={`/admin/user/${user._id}/edit`}>Update</Link>
                </td>
                <td>
                  <button onClick={() => deleteUser(user._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};
