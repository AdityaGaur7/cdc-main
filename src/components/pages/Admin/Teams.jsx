import React, { useState, useEffect } from 'react';
import axios from 'axios';
import API_BASE_URL from '../../../config/apiConfig';

const TeamManagement = () => {
  const [teams, setTeams] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editTeam, setEditTeam] = useState(null);
  const [newRanking, setNewRanking] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: '', direction: 'asc' });
  const [selectedPaymentStatus, setSelectedPaymentStatus] = useState({});

  // Fetch all teams
  const localdata = localStorage.getItem("user");
  const user = JSON.parse(localdata);
  const token = user.token;

  const fetchTeams = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/superadmin/teams`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTeams(response.data);
    } catch (error) {
      console.error('Error fetching teams:', error);
    }
  };

  useEffect(() => {
    fetchTeams();
  }, []);

  const updatePaymentStatus = async (teamId, status) => {
    try {
      await axios.put(
        `${API_BASE_URL}/api/superadmin/teams/${teamId}/payment`,
        { status },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      fetchTeams(); // Refresh teams after update
    } catch (error) {
      console.error('Error updating payment status:', error);
    }
  };

  // Delete a team
  const deleteTeam = async (teamId) => {
    try {
      await axios.delete(`${API_BASE_URL}/api/superadmin/teams/${teamId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchTeams(); // Refresh teams
    } catch (error) {
      console.error('Error deleting team:', error);
    }
  };

  // Save edited ranking
  const saveRanking = async () => {
    try {
      await axios.put(
        `${API_BASE_URL}/api/superadmin/teams/${editTeam._id}`,
        { ranking: newRanking },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setIsEditing(false);
      setEditTeam(null);
      setNewRanking('');
      fetchTeams(); // Refresh teams
    } catch (error) {
      console.error('Error updating ranking:', error);
    }
  };

  // Sort teams
  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
    const sortedTeams = [...teams].sort((a, b) => {
      if (a[key] < b[key]) {
        return direction === 'asc' ? -1 : 1;
      }
      if (a[key] > b[key]) {
        return direction === 'asc' ? 1 : -1;
      }
      return 0;
    });
    setTeams(sortedTeams);
  };

  return (
    <div className="p-6 bg-gray-100">
      <h1 className="text-2xl font-semibold mb-4">Team Management</h1>
      <div className="bg-white p-4 rounded shadow-md">
        <table className="min-w-full bg-white border">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-2 px-4 border cursor-pointer" onClick={() => handleSort('name')}>
                Team Name {sortConfig.key === 'name' ? (sortConfig.direction === 'asc' ? '↑' : '↓') : ''}
              </th>
              <th className="py-2 px-4 border cursor-pointer" onClick={() => handleSort('leaderName')}>
                Leader {sortConfig.key === 'leaderName' ? (sortConfig.direction === 'asc' ? '↑' : '↓') : ''}
              </th>
              <th className="py-2 px-4 border">Members</th>
              <th className="py-2 px-4 border cursor-pointer" onClick={() => handleSort('ranking')}>
                Ranking {sortConfig.key === 'ranking' ? (sortConfig.direction === 'asc' ? '↑' : '↓') : ''}
              </th>
              <th className="py-2 px-4 border">Payment Status</th>
              <th className="py-2 px-4 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {teams.map((team) => (
              <tr key={team._id} className="text-center">
                <td className="py-2 px-4 border">{team.name}</td>
                <td className="py-2 px-4 border">
                  {team.members.find((member) => member._id === team.leaderId)?.name || 'Unknown'}
                </td>
                <td className="py-2 px-4 border">
                  {team.members.map((member) => (
                    <div key={member._id}>{member.name},</div>
                  ))}
                </td>
                <td className="py-2 px-4 border">
                  {isEditing && editTeam?._id === team._id ? (
                    <input
                      type="number"
                      value={newRanking}
                      onChange={(e) => setNewRanking(e.target.value)}
                      className="border p-1"
                    />
                  ) : (
                    team.ranking
                  )}
                </td>
                <td className="py-2 px-4 border">
                  <select
                    value={selectedPaymentStatus[team._id] || team.payment?.status || 'pending'}
                    onChange={(e) => {
                      const status = e.target.value;
                      setSelectedPaymentStatus((prev) => ({ ...prev, [team._id]: status }));
                      updatePaymentStatus(team._id, status);
                    }}
                    className="border p-1 rounded"
                  >
                    <option value="pending">Pending</option>
                    <option value="accepted">Accepted</option>
                    <option value="rejected">Rejected</option>
                  </select>
                </td>

                <td className="py-2 px-4 border">
                  {isEditing && editTeam?._id === team._id ? (
                    <button
                      onClick={saveRanking}
                      className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                    >
                      Save
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        setIsEditing(true);
                        setEditTeam(team);
                        setNewRanking(team.ranking);
                      }}
                      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                      Edit
                    </button>
                  )}
                  <button
                    onClick={() => deleteTeam(team._id)}
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
    </div>
  );
};

export default TeamManagement;
