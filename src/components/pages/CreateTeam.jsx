import React, { useState, useEffect } from 'react';

const CreateTeam = () => {
  const [teamName, setTeamName] = useState('');
  const [team, setTeam] = useState(null); // Store team details if it exists
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [member, setMember] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [members, setMembers] = useState([]);

  useEffect(() => {
    // Fetch existing team details
    const fetchTeam = async () => {
      try {
        const localdata = localStorage.getItem('user');
        const user = JSON.parse(localdata);
        const token = user.token;


        const response = await fetch('https://cdc-finalserver-rose.vercel.app/api/teams', {

          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setTeam(data.team); // Store the team details
        }
      } catch (err) {
        console.error('Error fetching team:', err);
      }
    };

    fetchTeam();
  }, []);

  const handleTeamSubmit = async (e) => {
    e.preventDefault();

    try {
      const localdata = localStorage.getItem('user');
      const user = JSON.parse(localdata);
      const token = user.token;

      const response = await fetch('https://cdc-finalserver-rose.vercel.app/api/teams', {

        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ name: teamName }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to create team');
      }

      const { teamId } = await response.json();
      setMessage('Team created successfully!');
      setError('');
      setTeamName('');

      // Fetch the newly created team details

      const teamResponse = await fetch(`https://cdc-finalserver-rose.vercel.app/api/teams`, {

        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (teamResponse.ok) {
        const data = await teamResponse.json();
        setTeam(data.team);
      }
    } catch (err) {
      setMessage('');
      setError(err.message || 'An error occurred');
    }
  };

  const handleAddMember = async (e) => {
    e.preventDefault();

    if (team.members.length + 1 > 4) {
      setError('A team cannot have more than 4 members.');
      return;
    }

    try {
      const localdata = localStorage.getItem('user');
      const user = JSON.parse(localdata);
      const token = user.token;


      const response = await fetch('https://cdc-finalserver.vercel.app/api/teams/addMembers', {

        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ teamId: team._id, members: [member] }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to add member');
      }

      setMessage('Member added successfully!');
      setError('');
      setMember({ name: '', email: '', phone: '' });

      // Refresh team data

      const teamResponse = await fetch(`https://cdc-finalserver.vercel.app/api/teams`, {

        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (teamResponse.ok) {
        const data = await teamResponse.json();
        setTeam(data.team);
      }
    } catch (err) {
      setError(err.message || 'An error occurred');
    }
  };

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col items-center justify-center">
      {!team ? (
        <form onSubmit={handleTeamSubmit} className="w-3/4 max-w-md bg-gray-800 p-6 rounded-lg shadow-md mb-6">
          <h1 className="text-white text-4xl font-extrabold text-center mb-6">Create a Team</h1>
          <div className="mb-4">
            <label htmlFor="teamName" className="block text-gray-300 mb-2">
              Team Name
            </label>
            <input
              type="text"
              id="teamName"
              value={teamName}
              onChange={(e) => setTeamName(e.target.value)}
              placeholder="Enter team name"
              className="w-full px-4 py-2 border border-gray-600 bg-transparent rounded-md text-white focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          {message && <p className="text-green-500 mb-4">{message}</p>}
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition duration-200"
          >
            Create Team
          </button>
        </form>
      ) : (
        <div className="w-3/4 max-w-md bg-gray-800 p-6 rounded-lg shadow-md">
          <h1 className="text-white text-4xl font-extrabold text-center mb-6">Your Team</h1>
          <h2 className="text-white text-2xl mb-4">{team.name}</h2>
          <ul className="space-y-2">
            {team.members.map((member) => (
              <li key={member._id} className="text-gray-300">
                <strong>{member.name}</strong> - {member.email} - {member.phone}
              </li>
            ))}
          </ul>

          {team.members.length < 4 && (
            <form onSubmit={handleAddMember} className="space-y-4 mt-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={member.name}
                  onChange={(e) => setMember({ ...member, name: e.target.value })}
                  placeholder="Enter member name"
                  className="w-full px-4 py-2 border border-gray-600 bg-transparent rounded-md text-white focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={member.email}
                  onChange={(e) => setMember({ ...member, email: e.target.value })}
                  placeholder="Enter member email"
                  className="w-full px-4 py-2 border border-gray-600 bg-transparent rounded-md text-white focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-gray-300 mb-2">
                  Phone No.
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={member.phone}
                  onChange={(e) => setMember({ ...member, phone: e.target.value })}
                  placeholder="Enter member phone number"
                  className="w-full px-4 py-2 border border-gray-600 bg-transparent rounded-md text-white focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition duration-200"
              >
                Add Member
              </button>
            </form>
          )}
        </div>
      )}
    </div>
  );
};

export default CreateTeam;
