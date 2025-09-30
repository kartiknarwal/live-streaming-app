import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [roomId, setRoomId] = useState('');
  const navigate = useNavigate();

  const joinRoom = () => {
    if (!roomId.trim()) {
      alert('Please enter a Room ID to join or create a meeting.');
      return;
    }
    navigate(`/room/${roomId.trim()}`);
  };

  return (
    <div
      className="relative flex items-center justify-center min-h-screen p-4 
                 bg-gradient-to-br from-blue-900 via-purple-900 to-pink-800 
                 text-white overflow-hidden"
    >
      {/* Dynamic Background Blob Animations */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-400 rounded-full mix-blend-screen filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-fuchsia-400 rounded-full mix-blend-screen filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-indigo-400 rounded-full mix-blend-screen filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

      {/* Main Glassmorphism Card */}
      <div
        className="relative z-10 p-8 md:p-12 lg:p-16 w-full max-w-md mx-auto 
                   bg-white bg-opacity-10 backdrop-blur-lg 
                   rounded-3xl shadow-lg border border-white border-opacity-30 
                   flex flex-col items-center gap-8
                   transform transition-all duration-500 ease-in-out
                   hover:shadow-2xl hover:border-opacity-50"
      >
        <h1
          className="text-4xl md:text-5xl font-extrabold text-transparent 
                     bg-clip-text bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 
                     text-center leading-tight tracking-wide 
                     drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]"
        >
          Join a Video Conference
        </h1>

        <div className="relative w-full">
          <input
            type="text"
            value={roomId}
            onChange={(e) => setRoomId(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                joinRoom();
              }
            }}
            placeholder="Enter Room ID"
            className="w-full px-5 py-3 md:py-4 rounded-xl 
                       bg-white bg-opacity-20 text-gray-800 placeholder-gray-400
                       border border-white border-opacity-30 
                       focus:outline-none focus:ring-2 focus:ring-blue-400 
                       focus:border-transparent transition-all duration-300 
                       text-lg md:text-xl pl-12 
                       shadow-inner shadow-[0_0_10px_rgba(255,255,255,0.1)]"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400 opacity-80"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zM12 7c-2.757 0-5 2.243-5 5s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5zm0 8c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3z" />
          </svg>
        </div>

        <button
          onClick={joinRoom}
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 
                     hover:from-blue-700 hover:to-purple-700 
                     text-white font-bold py-3 md:py-4 rounded-xl shadow-lg 
                     transition-all duration-300 ease-in-out text-xl md:text-2xl 
                     transform hover:-translate-y-1 hover:scale-105 
                     focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-purple-900
                     drop-shadow-[0_0_15px_rgba(74,103,248,0.6)] hover:drop-shadow-[0_0_25px_rgba(74,103,248,0.8)]"
        >
          Join Room
        </button>

        <p className="text-gray-200 text-center text-sm md:text-base opacity-90 mt-2">
          Or create one by typing a unique name in the URL.
        </p>
      </div>
    </div>
  );
};

export default Home;