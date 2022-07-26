import React from 'react';
import { useState, useContext } from 'react';
import { QstContext } from '../../hooks/QstContext';
import './AnsweredQst.css';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';

function AnsweredQst() {
  const [qstList, setQstList] = useContext(QstContext);
  return (
    <div className='AnsweredQst__'>
          <div className="AQ__top">
              <div className="AQ__top_left">
                <FormatListNumberedIcon />
              </div>
              <div className="AQ__top_right">
              <b>Answered Questions</b>
              </div>
          </div>
      <div className="AQ__bottom">
        {qstList.map((Qst) => (<div className={Qst.qstMark?"AQ_number__unmarked" :"AQ_number"  }><b>{Qst.qstNumber}</b></div>))}
        </div>
    </div>
  )
}

export default AnsweredQst