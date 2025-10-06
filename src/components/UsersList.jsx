// src/components/UsersList.jsx
import React, { useEffect, useState } from "react";
import { fetchUsers } from "../api"; // go up one folder from components to src

function UsersList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // fetch users from backend API
    fetchUsers().then((data) => setUsers(data));
  }, []);

  return (
    <div className="users-list">
      <h2>Users</h2>
      {users.length === 0 ? (
        <p>No users found</p>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user._id}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default UsersList;
