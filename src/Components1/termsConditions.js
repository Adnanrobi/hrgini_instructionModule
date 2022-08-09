import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./termsConditions.css";
import swal from 'sweetalert';

function TermsConditions() {
  const navigate = useNavigate();
  const [registered, setRegistered] = useState(true);
  const [playing, setPlaying] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const agreeClickHandler = () => {
    console.log("Clicked");
    if (!registered) {
      setShowAlert(true);
    } 
    else if (registered && playing && !showAlert) {
      navigate("/exam")
    }
    
    else {
      setPlaying(true);
      navigator.getUserMedia(
        {
          video: true,
          audio: true,
        },
        (stream) => {
          let video = document.getElementsByClassName("app__videoFeed")[5];
          if (video) {
            video.srcObject = stream;
          }
        },
        (err) => console.error(err)
      );
      {
        playing
          ? 
          console.log("playing")
          : 
          swal({text:"You must turn on your camera and microphone",icon: "warning",dangerMode: true})
      }
    }
  };

  useEffect(() => {
    {
      showAlert && swal({text:"Register First",icon: "warning",dangerMode: true});
    }
  });

  return (
    <div>
      <div className="section">
        <h2 className="terms_header">Terms and Conditions</h2>
        <div className="terms_container">
          <div className="terms">
            <h2>For the exam getting started...</h2>
            <p>
              Please make sure you have completed <b>face registration</b> from <Link to="/registration">here</Link> and agreed to this.
              following <b>terms and conditions.</b>
            </p>
            <ul>
              <li>
                This is a <b>FREE</b> online test. DO NOT pay money to anyone to
                attend this test.
              </li>
              <li>
                You must keep your <b>camera and mic on</b> during the exam
              </li>
              <li>
                <b>No one is allowed</b> around you during this exam{" "}
              </li>
              <li>Total number of questions : 20.</li>
              <li>Each question carry 1 mark, no negative marks.</li>
              <li>Time alloted : 30 minutes.</li>
              <li>
                <b>DO NOT refresh</b> the page.
              </li>
            </ul>
            <p>
              The Seven Principles are well established and widely known, but
              they are not static. The Leave No Trace Center for Ethics
              continually examines, evaluates and reshapes the Principles. The
              Center’s Digital Innovation Department conducts research —
              including publishing scholarly articles in independent journals —
              to ensure that the Principles are up to date with the latest
              insights.
            </p>
          </div>
          <div className="btn_container">
            {registered ? (
              <button className="btn_accept" onClick={agreeClickHandler}>
                I agree!
              </button>
            ) : (
              <button className="btn_reject" onClick={agreeClickHandler} disabled>
                I agree!
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default TermsConditions;