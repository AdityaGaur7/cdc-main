import React, { useState } from 'react';

const AddTeamMembers = () => {
  const [member, setMember] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [members, setMembers] = useState([]);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMember({ ...member, [name]: value });
  };

  const addMember = (e) => {
    e.preventDefault();
    const { name, email, phone } = member;

    if (!name || !email || !phone) {
      setError('All fields are required.');
      setMessage('');
      return;
    }

    const newMembers = [...members, member];
    setMembers(newMembers);

    // Save members to local storage
    localStorage.setItem('teamMembers', JSON.stringify(newMembers));

    setMember({ name: '', email: '', phone: '' }); // Reset form
    setMessage('Member added successfully!');
    setError('');
  };

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-white text-4xl font-extrabold text-center mb-6">Add Team Members</h1>
      <form
        onSubmit={addMember}
        className="w-3/4 max-w-md bg-gray-800 p-6 rounded-lg shadow-md space-y-4"
      >
        <div>
          <label htmlFor="name" className="block text-gray-300 mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={member.name}
            onChange={handleChange}
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
            onChange={handleChange}
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
            onChange={handleChange}
            placeholder="Enter member phone number"
            className="w-full px-4 py-2 border border-gray-600 bg-transparent rounded-md text-white focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        {message && <p className="text-green-500">{message}</p>}
        {error && <p className="text-red-500">{error}</p>}
        <button
          type="submit"
          className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition duration-200"
        >
          Add Member
        </button>
      </form>

      <div className="w-3/4 max-w-md bg-gray-800 p-6 rounded-lg shadow-md mt-6">
        <h2 className="text-white text-2xl mb-4">Team Members</h2>
        {members.length > 0 ? (
          <ul className="space-y-2">
            {members.map((m, index) => (
              <li key={index} className="text-gray-300">
                <strong>{m.name}</strong> - {m.email} - {m.phone}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-400">No members added yet.</p>
        )}
      </div>
    </div>
  );
};

export default AddTeamMembers;
