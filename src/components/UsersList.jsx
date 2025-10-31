// src/components/UsersList.jsx
import React, { useEffect, useState } from "react";
import { fetchUsers } from "../api";

function UsersList({ onUserSelect }) { // Add onUserSelect prop
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers().then((data) => setUsers(data));
  }, []);

  // Add handleUserClick function
  const handleUserClick = (user) => {
    if (onUserSelect) {
      onUserSelect(user);
    }
  };

  return (
    <div className="users-list">
      <h2>Select User to Login</h2>
      {users.length === 0 ? (
        <p>No users found</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {users.map((user) => (
            <li 
              key={user._id} 
              onClick={() => handleUserClick(user)}
              style={{
                padding: '10px',
                margin: '5px 0',
                backgroundColor: '#f5f5f5',
                borderRadius: '5px',
                cursor: 'pointer',
                transition: 'background-color 0.2s'
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = '#e0e0e0'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#f5f5f5'}
            >
              {user.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default UsersList;