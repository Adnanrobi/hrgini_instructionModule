import React, { useContext } from "react";
import { QstContext } from "../../hooks/QstContext";
import ExamQst from "../ExamQst/ExamQst";
import ImageQst from "../ImageQst/ImageQst";
import "./QstList.css";

function QstList() {
  const [qstList, setQstList] = useContext(QstContext);

  const clickHandler = () => {
    console.log(QstContext.a)
  }

  return (
    <div className="QstList">
      {qstList.map((Qst, index) =>
        Qst.textQst ? (
          <ExamQst
            key={index}
            questionText={Qst.questionText}
            answerText1={Qst.answerText1}
            answerText2={Qst.answerText2}
            answerText3={Qst.answerText3}
            answerText4={Qst.answerText4}
            a={Qst.a}
            b={Qst.b}
            c={Qst.c}
            d={Qst.d}
            qstMark={Qst.qstMark}
            qstNumber={Qst.qstNumber}
            mark={Qst.mark}
            textQst={Qst.textQst}
          />
        ) : (
          <ImageQst
            key={index}
            questionText={Qst.questionText}
            answerText1={Qst.answerText1}
            answerText2={Qst.answerText2}
            answerText3={Qst.answerText3}
            answerText4={Qst.answerText4}
            a={Qst.a}
            b={Qst.b}
            c={Qst.c}
            d={Qst.d}
            qstMark={Qst.qstMark}
            qstNumber={Qst.qstNumber}
            mark={Qst.mark}
            textQst={Qst.textQst}
          />
        )
      )}
      <button type="submit" onClick={clickHandler}>Click to submit</button>
    </div>
  );
}

export default QstList;
