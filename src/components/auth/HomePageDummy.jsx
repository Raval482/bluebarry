// src/components/HomePageDummy.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useCheatProvider } from './CheatContext';


const getRandomColor = () => {
  const colors = [
    'bg-red-500',
    'bg-green-500',
    'bg-blue-500',
    'bg-yellow-500',
    'bg-pink-500',
    'bg-purple-500',
    'bg-teal-500',
    'bg-orange-500'
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

const HomePageDummy = () => {
  const [users, setUsers] = useState([]);
  const [colorMap, setColorMap] = useState({});
 const { setData } = useCheatProvider();
const navigate = useNavigate()

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const token = sessionStorage.getItem("token"); // 🔐 Get token
        const res = await axios.get("http://localhost:4000/showAllUser", {
          headers: {
            Authorization: `${token}`
          }
        });
        setUsers(res.data.allUser);

     
        const map = {};
        res.data.allUser.forEach(user => {
          map[user._id] = getRandomColor();
        });
        setColorMap(map);

      } catch (error) {
        console.error("Failed to fetch users:", error.message);
      }
    };

    fetchUsers();
  }, []);

  return (
     <div className="w-72 min-h-screen bg-gray-100 p-4 shadow-lg">
      <h2 className="text-xl font-bold mb-4">All Users</h2>

      {users.map((user) => (
        <div
          key={user._id}
          className="flex items-center gap-4 bg-white rounded-lg shadow p-3 mb-3 hover:bg-gray-50 cursor-pointer transition"
          onClick={() => {
            setData(user); // user ko context me set karo
            navigate(`/homes/userdata/${user._id}`); // navigate karo
          }}
        >
          <div
            className={`w-10 h-10 text-white flex items-center justify-center rounded-full text-lg font-bold ${colorMap[user._id]}`}
          >
            {user.name.charAt(0).toUpperCase()}
          </div>
          <div>
            <div className="font-semibold">{user.name}</div>
            <div className="text-sm text-gray-500">{user.email}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomePageDummy;
