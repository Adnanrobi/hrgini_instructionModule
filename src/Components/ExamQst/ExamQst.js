import { useState, useContext } from 'react';
import { QstContext } from '../../hooks/QstContext';
import React from 'react';
import './ExamQst.css';

function ExamQst(props) {
  const [qstList, setQstList] = useContext(QstContext);
  const [ExamQstState, setExamQstState] = useState('ExamQst__unmarked');

  const checkBox__clicked = (option) => {
    let duplicate__ExamOptions = { ...props, [option]: !props[option] }
    if (!duplicate__ExamOptions.a && !duplicate__ExamOptions.b && !duplicate__ExamOptions.c && !duplicate__ExamOptions.d)
    {
      duplicate__ExamOptions = { ...props, qstMark: false, [option]: !props[option]}
      const newQstList = qstList.map(obj => {
        if (obj.qstNumber === props.qstNumber) {
          return {
            ...obj,
          a: duplicate__ExamOptions.a, b: duplicate__ExamOptions.b, c: duplicate__ExamOptions.c, d: duplicate__ExamOptions.d,
          qstMark: duplicate__ExamOptions.qstMark};
        }
        return obj;
      });
      setQstList(newQstList);
      setExamQstState('ExamQst__unmarked');
      }
    else
    {
      duplicate__ExamOptions = { ...props, qstMark: true, [option]: !props[option]}
      const newQstList = qstList.map(obj => {
        if (obj.qstNumber === props.qstNumber) {
          return {
            ...obj,
          a: duplicate__ExamOptions.a, b: duplicate__ExamOptions.b, c: duplicate__ExamOptions.c, d: duplicate__ExamOptions.d,
          qstMark: duplicate__ExamOptions.qstMark};
        }
        return obj;
      });
      setQstList(newQstList);
      setExamQstState('ExamQst__marked');
      }
  }

  return (
    <div className={ExamQstState}>
        <div className="ExamQst__Left">
            <div className="ExamQst__LeftTop">{props.qstNumber}) {props.questionText}</div>
            <div className="ExamQst__LeftBottom"><div onClick={() =>{checkBox__clicked('a')}} className={props.a?'Checkbox__marked' : 'Checkbox__unmarked'}></div>{props.answerText1}</div>
            <div className="ExamQst__LeftBottom"><div onClick={() =>{checkBox__clicked('b')}} className={props.b?'Checkbox__marked' : 'Checkbox__unmarked'}></div>{props.answerText2}</div>
            <div className="ExamQst__LeftBottom"><div onClick={() =>{checkBox__clicked('c')}} className={props.c?'Checkbox__marked' : 'Checkbox__unmarked'}></div>{props.answerText3}</div>
            <div className="ExamQst__LeftBottom"><div onClick={() =>{checkBox__clicked('d')}} className={props.d?'Checkbox__marked' : 'Checkbox__unmarked'}></div>{props.answerText4}</div>
        </div>
        <div className="ExamQst__Right">
            <div className="ExamQst__RightTop"><b> Mark: <span className="Orange">{props.mark}</span></b></div>
        </div>
    </div>
  )
}

export default ExamQst