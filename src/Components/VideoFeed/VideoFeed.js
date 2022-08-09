import React from 'react';
import './VideoFeed.css';
import CameraAccess from '../CameraAccess/CameraAccess';

function VideoFeed() {
  return (
    <div className="VideoFeed">
      <CameraAccess />
    </div>
  )
}

export default VideoFeed