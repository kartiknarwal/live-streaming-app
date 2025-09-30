import React from 'react'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { useParams } from 'react-router-dom';


const Room = () => {
    const {roomId} =useParams();

      const appID = 1975299888;
  const serverSecret = "359a9400a7ca048ea3160f22ef9e23b6";
  const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(
    appID, 
    serverSecret, 
    roomId,  
    Date.now().toString(),  
    "kartik"
);
  let myMeeting = async (element) => {
      // Create instance object from Kit Token.
      const zp = ZegoUIKitPrebuilt.create(kitToken);
      // start the call
      zp.joinRoom({
        container: element,
        scenario: {
          mode: ZegoUIKitPrebuilt.VideoConference,
        },
        sharedLinks:[{name:"copy Link" ,url : `http://localhost:5173/room/${roomId}`}],
      });
  };


  return (
        <div
      className="myCallContainer"
      ref={myMeeting}
      style={{ width: '100vw', height: '100vh' }}
    ></div>

  )
}

export default Room