import React, { useState, useEffect } from 'react';
import './App.css';

const API_URL = 'http://localhost:3001/users';

function App() {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const res = await fetch(API_URL);
    const data = await res.json();
    setUsers(data);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    const newUser = await res.json();
    setUsers([...users, newUser]);
    setFormData({ name: '', email: '' });
  };

  const handleDelete = async (id) => {
    await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
    setUsers(users.filter(user => user.id !== id));
    if (selectedUser?.id === id) setSelectedUser(null);
  };

  const handleView = (user) => {
    setSelectedUser(user);
  };

  return (
    <div className="App">
      <h1>User Form</h1>
      <form onSubmit={handleSubmit} className="user-form">
        <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
        <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <button type="submit">Submit</button>
      </form>

      <h2>Users Table</h2>
      <table className="user-table">
        <thead>
          <tr>
            <th>ID</th><th>Name</th><th>Email</th><th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td><td>{user.name}</td><td>{user.email}</td>
              <td>
                <button onClick={() => handleView(user)}>👁️</button>
                <button onClick={() => handleDelete(user.id)}>🗑️</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedUser && (
        <div className="user-details">
          <h3>Selected User Details</h3>
          <p><strong>ID:</strong> {selectedUser.id}</p>
          <p><strong>Name:</strong> {selectedUser.name}</p>
          <p><strong>Email:</strong> {selectedUser.email}</p>
        </div>
      )}
    </div>
  );
}

export default App;
