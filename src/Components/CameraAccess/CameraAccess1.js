import React, { useState } from "react"
import Webcam from "react-webcam"

const videoConstraints = {
  width: 1920,
  height: 1080,
  facingMode: "user",
}
const CameraAccess = () => {
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
        audio={true}
        ref={webcamRef}
        screenshotFormat='image/jpeg'
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

export default CameraAccess
