import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(null);
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setSuccess(null);

    try {
      const res = await axios.post("http://localhost:4000/login", formData);
        const userId = res.data.data._id
        const userName = res.data.data.name
        const token = res.data.token
        sessionStorage.setItem("userId", userId); 
        sessionStorage.setItem("token",token); 
        sessionStorage.setItem("userName",userName); 
        setSuccess(true);
        setMessage("Login successful!");
        navigate("/homes")
    
    } catch (error) {
      setSuccess(false);
      setMessage( "Login error");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6">User Login</h2>

        {message && (
          <div className={`mb-4 text-center p-2 rounded ${
            success ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
          }`}>
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="w-full border p-2 rounded"
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            className="w-full border p-2 rounded"
            onChange={handleChange}
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
