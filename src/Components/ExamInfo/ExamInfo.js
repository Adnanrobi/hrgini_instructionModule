import React from 'react';
import "./ExamInfo.css";
import TimerIcon from '@mui/icons-material/Timer';
import CountdownTimer from "../CountdownTimer/CountdownTimer";

function ExamInfo() {

  const THREE_DAYS_IN_MS =60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();

  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

  return (
    <div className="ExamInfo">  
        <div className="ExamInfo__Left">
            <div className="ExamInfo__LeftTop"><b>SWE EXAM 4101</b></div>
            <div className="ExamInfo__LeftBottom">Marks:  <b>20</b></div>
        </div>
        <div className="ExamInfo__Right">
            <div className="ExamInfo__RightTop" style={{textAlign:"center"}}><b>Remaining Time:</b></div>
        <div className="ExamInfo__RightBottom">
          <div className="ExamInfo__RightBottom__Left">
            <TimerIcon className="timer_icons"/>
          </div>
          <div className="ExamInfo__RightBottom__Right">
            {<b><CountdownTimer targetDate={dateTimeAfterThreeDays} /></b>}
          </div>
        </div>        
      </div>
      </div>
  )
}

export default ExamInfo