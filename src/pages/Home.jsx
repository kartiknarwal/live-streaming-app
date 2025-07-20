import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const [roomId, setRoomId] = useState("");

    const navigate =useNavigate();

    const joinRoom =()=>{
        if(!roomId) return;
        navigate(`/room/${roomId}`);
    }
  return (
    <div className='form'>
        <input type="text"
        value={roomId}
        onChange={(e) => setRoomId(e.target.value)}
        placeholder='Enter Your Room ID'
        />
        <button onClick={joinRoom}>Join Room</button>
    </div>
  )
}

export default Home