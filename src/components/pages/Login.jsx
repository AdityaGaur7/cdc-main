import React, { useState } from 'react';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';
import API_BASE_URL from "../../config/apiConfig";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formData;

    try {
      const response = await fetch(
        `${API_BASE_URL}/api/auth/login`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to login');
      }

      const data = await response.json();
      localStorage.setItem('user', JSON.stringify(data)); // Save user data in localStorage

      setMessage('Login successful!');
      setError('');
      setFormData({ email: '', password: '' });

      // Redirect to dashboard
      window.location.href = '/';
      
    } catch (err) {
      setMessage('');
      setError('Invalid credentials');
    }
  };

  return (
    <div className="relative flex items-center bg-gray-900 justify-center min-h-screen">
      <div
        className="absolute inset-0 top-0 right-0 blur-3xl z-[0]"
        style={{
          background:
            'radial-gradient(circle, rgba(23,20,27,1) 0%, rgba(58,94,121,1) 66%, rgba(42,58,78,1) 90%)',
        }}
      />
      <div className="relative w-[90%] max-w-md bg-white/60 backdrop-blur-md rounded-lg shadow-lg p-6 z-10">
        <h2 className="text-4xl font-semibold text-center text-black text-bold mb-4">
          Login
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-black">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="mt-1 block w-full px-4 py-2 border-none bg-gray-800 text-white rounded-lg"
              required
            />
          </div>
          <div className="mb-4 relative">
            <label htmlFor="password" className="block text-sm font-medium text-black">
              Password
            </label>
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="mt-1 block w-full px-4 py-2 border-none bg-gray-800 text-white rounded-lg"
              required
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-9 text-gray-500 hover:text-gray-300 focus:outline-none"
            >
              {showPassword ? <IoMdEyeOff size={20} /> : <IoMdEye size={20} />}
            </button>
          </div>
          {message && <p className="text-green-500 text-center">{message}</p>}
          {error && <p className="text-red-500 text-center">{error}</p>}
         <p className='d-flex justify-center'><a href="/signup">Create a new account</a></p> 
          <div className="mt-6">
            <button
              type="submit"
              className="w-full bg-blue-500 text-2xl text-white py-1 text-bold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
