import React, { useState, useEffect } from 'react';
import axios from 'axios';
import API_BASE_URL from '../../config/apiConfig';

const AdminProfile = () => {
  const [admin, setAdmin] = useState(null);
  const [team, setTeam] = useState(null); // Add state for team details
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const localdata = localStorage.getItem('user');
  const user = JSON.parse(localdata);
  const token = user.token;

  // Fetch team details
  const fetchTeamDetails = async (teamId) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/teams/${teamId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTeam(response.data.team);
      console.log(response.data.team);
      
    } catch (error) {
      console.error('Error fetching team details:', error);
    }
  };

  // Fetch admin details
  const fetchAdminDetails = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/superadmin/profile`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const adminData = response.data;
      setAdmin(adminData);
   console.log(adminData);
   
      setFormData({
        name: adminData.name,
        email: adminData.email,
        password: '', // Do not fetch password for security
      });

      // Fetch team details if admin has a team
      if (adminData.teamId) {
        console.log(adminData.teamId);
        
        fetchTeamDetails(adminData.teamId);
      }
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

              {team && (
                <div className="mb-4">
                  <h2 className="text-xl font-semibold">Team Details</h2>
                  <p>
                    <strong>Team Name:</strong> {team.name}
                  </p>
                  <p>
                    <strong>Members:</strong>
                  </p>
                  <ul className="list-disc pl-6">
                    {team.members.map((member) => (
                      <li key={member._id}>
                        {member.name} ({member.email})
                      </li>
                    ))}
                  </ul>
                </div>
              )}

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
