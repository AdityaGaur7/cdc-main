import React, { useState, useEffect } from 'react';
import axios from 'axios';
import API_BASE_URL from '../../../config/apiConfig';

const AdminProfile = () => {
  const [admin, setAdmin] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const localdata = localStorage.getItem("user");
  const user = JSON.parse(localdata);
  const token = user.token;

  // Fetch admin details
  const fetchAdminDetails = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/superadmin/profile`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setAdmin(response.data);
      setFormData({
        name: response.data.name,
        email: response.data.email,
        password: '', // Do not fetch password for security
      });
    } catch (error) {
      console.error('Error fetching admin details:', error);
    }
  };

  useEffect(() => {
    fetchAdminDetails();
  }, []);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Submit the updated details
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedData = { ...formData };
      if (formData.password === '') {
        delete updatedData.password; // Don't update password if it's empty
      }

      await axios.put(`${API_BASE_URL}/api/superadmin/profile`, updatedData, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setIsEditing(false);
      fetchAdminDetails(); // Refresh admin details after update
    } catch (error) {
      console.error('Error updating admin profile:', error);
    }
  };

  return (
    <div className="p-6 bg-gray-100">
      <h1 className="text-2xl font-semibold mb-4">Admin Profile</h1>
      {admin ? (
        <div className="bg-white p-6 rounded shadow-md">
          {!isEditing ? (
            <>
              <div className="mb-4">
                <strong>Name:</strong> {admin.name}
              </div>
              <div className="mb-4">
                <strong>Email:</strong> {admin.email}
              </div>
              <button
                onClick={() => setIsEditing(true)}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Edit Profile
              </button>
            </>
          ) : (
            <form onSubmit={handleFormSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium mb-1" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium mb-1" htmlFor="password">
                  Password (Leave blank to keep unchanged)
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>

              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                >
                  Save Changes
                </button>
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                >
                  Cancel
                </button>
              </div>
            </form>
          )}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default AdminProfile;
