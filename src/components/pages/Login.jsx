import React, { useState } from 'react';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formData;

    try {
      const response = await fetch('https://cdc-finalserver.vercel.app/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
     console.log(response)
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to login');
      }

     

      // Save the response data into local storage
      
      
      const data = await response.json();
      localStorage.setItem('user', JSON.stringify(data));


      setMessage('Login successful!');
      setError('');
      setFormData({ email: '', password: '' });

      // Store token or handle login success
      console.log('JWT Token:', data.token);
    } catch (err) {
      setMessage('');
      setError('Invalid credentials');
    }
  };

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col items-center">
      <div className="flex flex-col justify-evenly items-center h-auto w-full p-2">
        <h1 className="text-white text-4xl font-extrabold text-center mt-4 mb-6">
          LOGIN HERE
        </h1>
        <div className="flex flex-col sm:flex-row justify-evenly items-center w-3/4 h-auto p-3">
          <form className="space-y-6 w-full" onSubmit={handleSubmit}>
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

            {message && <p className="text-green-500">{message}</p>}
            {error && <p className="text-red-500">{error}</p>}

            <button
              type="submit"
              className="w-full py-2 mt-4 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition duration-200"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
