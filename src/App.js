import React, { Component }  from 'react';
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AnsweredQst from "./Components/AnsweredQst/AnsweredQst";
import ExamInfo from "./Components/ExamInfo/ExamInfo";
//import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import QstList from "./Components/QstList/QstList";
import VideoFeed from "./Components/VideoFeed/VideoFeed";
import Terms from "./Components1/termsConditions";
//import Exam from "./Components1/examPage";
import Reg from "./Components1/registration";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Terms />} />
        <Route
          path="/exam"
          element={
            <div className="App__body">
              <div className="App__left">
                <VideoFeed />
                <AnsweredQst />
              </div>
              <div className="App__right">
                <ExamInfo />
                <QstList />
              </div>
            </div>
          }
        />
        <Route path="/registration" element={<Reg />} />
      </Routes>
    </Router>
  );
}

export default App;