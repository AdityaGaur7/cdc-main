import React, { useState, useEffect } from 'react';
import axios from 'axios';
import API_BASE_URL from '../../../config/apiConfig';

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [editUser, setEditUser] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    teamId: '',
    college: '',
    universityRollNo: '',
    codeforceHandle: ''
  });
  const [sortConfig, setSortConfig] = useState({ key: '', direction: 'asc' });

  // Fetch all users
  const localdata = localStorage.getItem('user');
  const user = JSON.parse(localdata);
  const token = user.token;

  const fetchUsers = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/superadmin/users`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Delete a user
  const deleteUser = async (userId) => {
    try {
      await axios.delete(`${API_BASE_URL}/api/superadmin/users/${userId}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      fetchUsers();
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  // Handle form input change
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Open edit form with pre-filled data
  const openEditForm = (user) => {
    setEditUser(user);
    setFormData({ ...user });
  };

  // Save edited user details
  const saveUser = async () => {
    try {
      await axios.put(
        `${API_BASE_URL}/api/superadmin/users/${editUser._id}`,
        { ...formData },
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      );
      setEditUser(null);
      setFormData({
        name: '',
        email: '',
        role: '',
        teamId: '',
        college: '',
        universityRollNo: '',
        codeforceHandle: ''
      });
      fetchUsers();
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  // Handle sorting
  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
    const sortedUsers = [...users].sort((a, b) => {
      if (a[key] < b[key]) return direction === 'asc' ? -1 : 1;
      if (a[key] > b[key]) return direction === 'asc' ? 1 : -1;
      return 0;
    });
    setUsers(sortedUsers);
  };

  return (
    <div className="p-6 bg-gray-100">
      <h1 className="text-2xl font-semibold mb-4">User Management</h1>
      <div className="bg-white p-4 rounded shadow-md">
        <table className="min-w-full bg-white border">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-2 px-4 border cursor-pointer" onClick={() => handleSort('name')}>
                Name {sortConfig.key === 'name' ? (sortConfig.direction === 'asc' ? '↑' : '↓') : ''}
              </th>
              <th className="py-2 px-4 border cursor-pointer" onClick={() => handleSort('email')}>
                Email {sortConfig.key === 'email' ? (sortConfig.direction === 'asc' ? '↑' : '↓') : ''}
              </th>
              <th className="py-2 px-4 border cursor-pointer" onClick={() => handleSort('college')}>
                College {sortConfig.key === 'college' ? (sortConfig.direction === 'asc' ? '↑' : '↓') : ''}
              </th>
              <th className="py-2 px-4 border cursor-pointer" onClick={() => handleSort('universityRollNo')}>
                Roll No. {sortConfig.key === 'universityRollNo' ? (sortConfig.direction === 'asc' ? '↑' : '↓') : ''}
              </th>
              <th className="py-2 px-4 border cursor-pointer" onClick={() => handleSort('codeforceHandle')}>
              codeforceHandle {sortConfig.key === 'codeforceHandle' ? (sortConfig.direction === 'asc' ? '↑' : '↓') : ''}
              </th>
              <th className="py-2 px-4 border">Role</th>
              <th className="py-2 px-4 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id} className="text-center">
                <td className="py-2 px-4 border">{user.name}</td>
                <td className="py-2 px-4 border">{user.email}</td>
                <td className="py-2 px-4 border">{user.college}</td>
                <td className="py-2 px-4 border">{user.universityRollNo}</td>
                <td className="py-2 px-4 border">{user.codeforceHandle}</td>
                <td className="py-2 px-4 border">{user.role}</td>
                <td className="py-2 px-4 border">
                  <button
                    onClick={() => openEditForm(user)}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteUser(user._id)}
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 ml-2"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Edit User Modal */}
      {editUser && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-md w-96">
            <h2 className="text-xl font-semibold mb-4">Edit User</h2>
            <form>
              <label className="block mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full border p-2 rounded mb-4"
              />

              <label className="block mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full border p-2 rounded mb-4"
              />

              <label className="block mb-2">Role</label>
              <input
                type="text"
                name="role"
                value={formData.role}
                onChange={handleInputChange}
                className="w-full border p-2 rounded mb-4"
              />

              <label className="block mb-2">College</label>
              <input
                type="text"
                name="college"
                value={formData.college}
                onChange={handleInputChange}
                className="w-full border p-2 rounded mb-4"
              />

              <label className="block mb-2">University Roll No</label>
              <input
                type="text"
                name="universityRollNo"
                value={formData.universityRollNo}
                onChange={handleInputChange}
                className="w-full border p-2 rounded mb-4"
              />

              <label className="block mb-2">Codeforces Handle</label>
              <input
                type="text"
                name="codeforceHandle"
                value={formData.codeforceHandle}
                onChange={handleInputChange}
                className="w-full border p-2 rounded mb-4"
              />

              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={saveUser}
                  className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={() => setEditUser(null)}
                  className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserManagement;
