import React, { useState, useEffect } from 'react';
import axios from 'axios';
import API_BASE_URL from '../../../config/apiConfig';

const Leaderboard = () => {
  const [teams, setTeams] = useState([]);
  const [sortConfig, setSortConfig] = useState({ key: 'ranking', direction: 'asc' });

  const localdata = localStorage.getItem("user");
  const user = JSON.parse(localdata);
  const token = user.token;

  // Fetch all teams
  const fetchTeams = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/superadmin/teams`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      // Sort teams based on ranking in ascending order
      const sortedTeams = response.data.sort((a, b) => a.ranking - b.ranking);
      setTeams(sortedTeams);
    } catch (error) {
      console.error('Error fetching teams:', error);
    }
  };

  useEffect(() => {
    fetchTeams();
  }, []);

  return (
    <div className="p-6 bg-gray-100">
      <h1 className="text-2xl font-semibold mb-4">Leaderboard</h1>
      <div className="bg-white p-4 rounded shadow-md">
        <table className="min-w-full bg-white border">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-2 px-4 border">Rank</th>
              <th className="py-2 px-4 border">Team Name</th>
              <th className="py-2 px-4 border">Leader</th>
              <th className="py-2 px-4 border">Ranking</th>
            </tr>
          </thead>
          <tbody>
            {teams.map((team, index) => (
              <tr key={team._id} className="text-center">
                <td className="py-2 px-4 border">{index + 1}</td>
                <td className="py-2 px-4 border">{team.name}</td>
                <td className="py-2 px-4 border">
                  {team.members.find((member) => member._id === team.leaderId)?.name || 'Unknown'}
                </td>
                <td className="py-2 px-4 border">{team.ranking}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Leaderboard;
