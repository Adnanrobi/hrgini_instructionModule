import React, { useRef, useEffect, useState } from "react";
import "./CameraAccess.css";


function CameraAccess() {
  const videoRef = useRef(null);
  const photoRef = useRef(null);

  const getVideo = () => {
    navigator.mediaDevices
      .getUserMedia({
        video: { width: 1920, height: 1080 },
      })
      .then((stream) => {
        let video = videoRef.current;
        video.srcObject = stream;
        video.play();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getPhoto = () => {
    const width=414;
    const height = width / (16/9);
    let video = videoRef.current;
    let photo = photoRef.current;

    photo.width = width;
    photo.height = height;

    let ctx = photo.getContext('2d');
    ctx.drawImage(video, 0, 0, width, height);
  }

  useEffect(() => {
    getVideo();
  }, [videoRef]);

  return (
    <div className="camera">
      <video ref={videoRef}></video>
      <button onClick={getPhoto}>SNAP!</button>
    </div>
  );
}

export default CameraAccess;


// {length < 5 ? (
//   setInterval({capture},2000)
// ) : (
//   {submit}
// )}