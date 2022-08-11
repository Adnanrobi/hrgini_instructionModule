import { useState, useContext } from "react";
import { QstContext } from "../../hooks/QstContext";
import React from "react";
import "./ImageQst1.css";

function ImageQst(props) {
  const [qstList, setQstList] = useContext(QstContext);
  const [ImageQstState, setImageQstState] = useState("ImageQst__unmarked");

  const checkBox__clicked = (option) => {
    let duplicate__ExamOptions = { ...props, [option]: !props[option] };
    if (
      !duplicate__ExamOptions.a &&
      !duplicate__ExamOptions.b &&
      !duplicate__ExamOptions.c &&
      !duplicate__ExamOptions.d
    ) {
      duplicate__ExamOptions = {
        ...props,
        qstMark: false,
        [option]: !props[option],
      };
      const newQstList = qstList.map((obj) => {
        if (obj.qstNumber === props.qstNumber) {
          return {
            ...obj,
            a: duplicate__ExamOptions.a,
            b: duplicate__ExamOptions.b,
            c: duplicate__ExamOptions.c,
            d: duplicate__ExamOptions.d,
            qstMark: duplicate__ExamOptions.qstMark,
          };
        }
        return obj;
      });
      setQstList(newQstList);
      setImageQstState("ImageQst__unmarked");
    } else {
      duplicate__ExamOptions = {
        ...props,
        qstMark: true,
        [option]: !props[option],
      };
      const newQstList = qstList.map((obj) => {
        if (obj.qstNumber === props.qstNumber) {
          return {
            ...obj,
            a: duplicate__ExamOptions.a,
            b: duplicate__ExamOptions.b,
            c: duplicate__ExamOptions.c,
            d: duplicate__ExamOptions.d,
            qstMark: duplicate__ExamOptions.qstMark,
          };
        }
        return obj;
      });
      setQstList(newQstList);
      setImageQstState("ImageQst__marked");
    }
  };

  return (
    <div className={ImageQstState}>
      <div className="firstRow">
        <div className="ImageQst__Left">
          <div className="ImageQst__LeftTop">
            {props.qstNumber}) {props.questionText}
          </div>
        </div>
        <div className="ImageQst__Right">
          <div className="ImageQst__RightTop">
            <b>
              {" "}
              Mark: <span className="Orange">{props.mark}</span>
            </b>
          </div>
        </div>
      </div>

      <div className="SecondRow">
        <img src={props.answerText1} />
      </div>

      <div className="ThirdRow">
        <div className="ImageQst__LeftBottom">
          <div
            onClick={() => {
              checkBox__clicked("a");
            }}
            className={props.a ? "Checkbox__marked" : "Checkbox__unmarked"}
          ></div>
          {props.answerText1}
        </div>
        <div className="ImageQst__LeftBottom">
          <div
            onClick={() => {
              checkBox__clicked("b");
            }}
            className={props.b ? "Checkbox__marked" : "Checkbox__unmarked"}
          ></div>
          {props.answerText2}
        </div>
        <div className="ImageQst__LeftBottom">
          <div
            onClick={() => {
              checkBox__clicked("c");
            }}
            className={props.c ? "Checkbox__marked" : "Checkbox__unmarked"}
          ></div>
          {props.answerText3}
        </div>
        <div className="ImageQst__LeftBottom">
          <div
            onClick={() => {
              checkBox__clicked("d");
            }}
            className={props.d ? "Checkbox__marked" : "Checkbox__unmarked"}
          ></div>
          {props.answerText4}
        </div>
      </div>
    </div>
  );
}

export default ImageQst;
