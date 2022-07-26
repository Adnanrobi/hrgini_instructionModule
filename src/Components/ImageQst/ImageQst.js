import { useState, useContext } from 'react';
import { QstContext } from '../../hooks/QstContext';
import React from 'react';
import './ImageQst.css';

function ImageQst(props) {
  const [qstList, setQstList] = useContext(QstContext);
  const [ImageQstState, setImageQstState] = useState('ImageQst');

  const checkBox__clicked = (option) => {
    let duplicate__ExamOptions = { ...props, [option]: !props[option] }
    if (!duplicate__ExamOptions.a && !duplicate__ExamOptions.b && !duplicate__ExamOptions.c && !duplicate__ExamOptions.d) {
      duplicate__ExamOptions = { ...props, qstMark: false, [option]: !props[option] }
      const newQstList = qstList.map(obj => {
        if (obj.qstNumber === props.qstNumber) {
          return {
            ...obj,
            a: duplicate__ExamOptions.a, b: duplicate__ExamOptions.b, c: duplicate__ExamOptions.c, d: duplicate__ExamOptions.d,
            qstMark: duplicate__ExamOptions.qstMark
          };
        }
        return obj;
      });
      setQstList(newQstList);
      setImageQstState('ImageQst');
    }
    else {
      duplicate__ExamOptions = { ...props, qstMark: true, [option]: !props[option] }
      const newQstList = qstList.map(obj => {
        if (obj.qstNumber === props.qstNumber) {
          return {
            ...obj,
            a: duplicate__ExamOptions.a, b: duplicate__ExamOptions.b, c: duplicate__ExamOptions.c, d: duplicate__ExamOptions.d,
            qstMark: duplicate__ExamOptions.qstMark
          };
        }
        return obj;
      });
      setQstList(newQstList);
      setImageQstState('ImageQst__marked');
    }
  }

  return (
    <div className={ImageQstState}>
      <div className='Qst__row'>
        <div className='Qst__row__left'>
          {props.qstNumber}) {props.questionText}
        </div>
        <div className='Qst__row__right'>
          <b> Mark: <span className="Orange">{props.mark}</span></b>
        </div>
      </div>
      <div className='ImageQst__imageInsideQst'>
        <div className='ImageQst__eachImage'>
          <div className='ImageQst__image'><img className='ImageQst__option' src={props.answerText1} /></div>
          <div className='ImageQst__optionabcd'>a</div>
        </div>
        <div className='ImageQst__eachImage'>
          <div className='ImageQst__image'><img className='ImageQst__option' src={props.answerText1} /></div>
          <div className='ImageQst__optionabcd'>b</div>
        </div>
        <div className='ImageQst__eachImage'>
          <div className='ImageQst__image'><img className='ImageQst__option' src={props.answerText1} /></div>
          <div className='ImageQst__optionabcd'>c</div>
        </div>
        <div className='ImageQst__eachImage'>
          <div className='ImageQst__image'><img className='ImageQst__option' src={props.answerText1} /></div>
          <div className='ImageQst__optionabcd'>d</div>
        </div>
      </div>
      <div className='Image__grid'>
        <div className="ImageQst__LeftBottom"><div onClick={() => { checkBox__clicked('a') }} className={props.a ? 'Checkbox__marked' : 'Checkbox__unmarked'}></div>a</div>
        <div className="ImageQst__LeftBottom"><div onClick={() => { checkBox__clicked('b') }} className={props.b ? 'Checkbox__marked' : 'Checkbox__unmarked'}></div>b</div>
        <div className="ImageQst__LeftBottom"><div onClick={() => { checkBox__clicked('c') }} className={props.c ? 'Checkbox__marked' : 'Checkbox__unmarked'}></div>c</div>
        <div className="ImageQst__LeftBottom"><div onClick={() => { checkBox__clicked('d') }} className={props.d ? 'Checkbox__marked' : 'Checkbox__unmarked'}></div>d</div>
      </div>
    </div>
  )
}

export default ImageQst