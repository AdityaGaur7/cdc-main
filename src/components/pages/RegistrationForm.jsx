import React, { useState } from 'react';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    role: 'User', // Default role
  });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRoleChange = (e) => {
    setFormData({ ...formData, role: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://cdc-finalserver-rose.vercel.app/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          phone: formData.phone,
          password: formData.password,
          role: formData.role,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to register');
      }

      setMessage('Registration successful!');
      setError('');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        phone: '',
        role: 'User', // Reset role to default
      });
    } catch (err) {
      setMessage('');
      setError(err.message || 'Failed to register');
    }
  };

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col items-center">
      <div className="flex flex-col justify-evenly items-center h-auto w-full p-2">
        <h1 className="text-white text-4xl font-extrabold text-center mt-4 mb-6">
          REGISTER HERE
        </h1>
        <div className="flex flex-col sm:flex-row justify-evenly items-center w-3/4 h-auto p-3">
          <form className="space-y-6 w-full" onSubmit={handleSubmit}>
            <div className="flex items-center space-x-4">
              <label className="text-gray-300 w-1/4">NAME:</label>
              <div className="flex gap-4 w-3/4">
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                  className="w-1/2 px-3 py-2 border border-gray-600 bg-transparent rounded-md text-white focus:outline-none focus:border-blue-500"
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                  className="w-1/2 px-3 py-2 border border-gray-600 bg-transparent rounded-md text-white focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <label className="text-gray-300 w-1/4">EMAIL:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-3/4 px-3 py-2 border border-gray-600 bg-transparent rounded-md text-white focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="flex items-center space-x-4">
              <label className="text-gray-300 w-1/4">PASSWORD:</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                className="w-3/4 px-3 py-2 border border-gray-600 bg-transparent rounded-md text-white focus:outline-none focus:border-blue-500"
                required
              />
            </div>

            <div className="flex items-center space-x-4">
              <label className="text-gray-300 w-1/4">PHONE NO:</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone No:"
                className="w-3/4 px-3 py-2 border border-gray-600 bg-transparent rounded-md text-white focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="flex items-center space-x-4">
              <label className="text-gray-300 w-1/4">ROLE:</label>
              <div className="flex w-3/4 items-center space-x-4">
                <label className="flex items-center text-gray-300">
                  <input
                    type="radio"
                    name="role"
                    value="User"
                    checked={formData.role === 'User'}
                    onChange={handleRoleChange}
                    className="mr-2"
                  />
                  User
                </label>
                <label className="flex items-center text-gray-300">
                  <input
                    type="radio"
                    name="role"
                    value="Team Leader"
                    checked={formData.role === 'Team Leader'}
                    onChange={handleRoleChange}
                    className="mr-2"
                  />
                  Team Leader
                </label>
              </div>
            </div>

            {message && <p className="text-green-500">{message}</p>}
            {error && <p className="text-red-500">{error}</p>}

            <button
              type="submit"
              className="w-full py-2 mt-4 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition duration-200"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
