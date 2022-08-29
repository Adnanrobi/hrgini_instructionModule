import React, { useContext } from "react";
import { QstContext } from "../../hooks/QstContext";
import AnsweredList from "../AnsweredList";
import AnsweredList2 from "../AnsweredList2";
import ExamQst from "../ExamQst/ExamQst";
import ImageQst from "../ImageQst/ImageQst1";
import "./QstList.css";

function QstList() {
  const [qstList, setQstList] = useContext(QstContext);

  function submitbutton_click_handler() {
    let obj = [];
    let obj1 = {};
    // qstList.map((Qst,index) => console.log(`Question No: ${Qst.qstNumber}, a:${Qst.a}, b: ${Qst.b}, c: ${Qst.c}, d: ${Qst.d} `))
    qstList.map((Qst, index) => {
      let ans = [];
      if (Qst.a) ans.push(1);
      if (Qst.b) ans.push(2);
      if (Qst.c) ans.push(3);
      if (Qst.d) ans.push(4);
      obj1 = { [Qst.qstNumber]: ans };
      obj.push(obj1);
    });
    JSON.stringify(obj);
    console.log(obj);

    // let stream = this.webcam.video.srcObject;
    //   const tracks = stream.getTracks();

    //   tracks.forEach(track => track.stop());
    //   this.webcam.video.srcObject = null;
  }

  return (
    <div className="QstList">
      {qstList.map((Qst, index) =>
        Qst.textQst ? (
          <ExamQst
            key={index}
            QstImage={Qst.QstImage}
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
            QstImage={Qst.QstImage}
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
      <button className="Submit__btn" onClick={submitbutton_click_handler}>
        Submit
      </button>
    </div>
  );
}

export default QstList;
