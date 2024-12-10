/* eslint-disable */
import React, { useContext, useEffect } from 'react';
import { Button } from '@material-ui/core';

import { SocketContext } from '../Context';

const Notifications = () => {
  const { answerCall, call, callAccepted, video, setVideo } = useContext(SocketContext);

  useEffect(() => {
    // This will be called after the component has rendered
    setVideo(video);
  }, [video, setVideo]); // Make sure to include dependencies if needed

  return (
    <>
      {call.isReceivingCall && !callAccepted && (
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <h1>{call.name} is calling:</h1>
          <Button variant="contained" color="primary" onClick={answerCall}>
            Answer
          </Button>
        </div>
      )}
    </>
  );
};

export default Notifications;

