import React, { useState } from "react"
import Webcam from "react-webcam";
import "./CameraAccess.css";

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: "user",
}
const App = () => {
  let images = []
  const [length, setLength] = useState(0)
  const webcamRef = React.useRef(null)
  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot()
    images.push(imageSrc)
    setLength(images.length)
    console.log(images)
    // eslint-disable-next-line
  }, [webcamRef])

  const submit = () => {
    console.log("submitted")
  }

  return (
    <>
      <Webcam
        audio={false}
        height={720}
        ref={webcamRef}
        screenshotFormat='image/jpeg'
        width={1280}
        videoConstraints={videoConstraints}
      />
      
      {length < 5 ? (
        <button onClick={capture}>Capture photo</button>
      ) : (
        <button onClick={submit}>Submit</button>
      )}
    </>
  )
}

export default App
