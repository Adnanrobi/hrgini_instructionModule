import React, { useEffect, useState } from 'react';
import "./termsConditions.css";

function TermsConditions() {
  const [registered, setRegistered] = useState(false);
  const [playing, setPlaying] = useState(false);

  const agreeClickHandler = () => {

    if(registered===false)
      

    setPlaying(true);
		navigator.getUserMedia(
			{
				video: true,
			},
			(stream) => {
				let video = document.getElementsByClassName('app__videoFeed')[0];
				if (video) {
					video.srcObject = stream;
				}
			},
			(err) => console.error(err)
		);
    // {registered?console.log("clicked"):alert("Register First")};
    {playing?console.log("playing"):alert("Turn on your camera and microphone")}
  }

  useEffect(() => {
    {registered?console.log("clicked"):alert("Register First")};
  },
  []
  )

  return (
    <div>
      <div className="section">
        <h2 className="terms_header">Terms and Conditions</h2>
        <div className="terms_container">
          <div className="terms">
            <h2>For the exam getting started...</h2>
            <p>
              Please make sure you have completed face registration from <a href="https://faceRegistration">here</a> and agreed to this following terms and conditions.
            </p>
            <ul>
              <li>
                This is a FREE online test. DO NOT pay money to anyone to attend
                this test.
              </li>
              <li>You must keep your camera on during the exam</li>
              <li>No one is allowed around you during this exam </li>
              <li>Total number of questions : 20.</li>
              <li>Each question carry 1 mark, no negative marks.</li>
              <li>Time alloted : 30 minutes.</li>
              <li>DO NOT refresh the page.</li>
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
            <button className="btn_accept" 
            //disabled={!registered}
            onClick={agreeClickHandler}>
              I agree!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default TermsConditions;


// $(<div>
        //     <section>
        //         <h2 class="terms-header">Terms and Conditions</h2>
        //         <div class="terms-container">
        //             <div class="terms">
        //                 <h2>For the exam getting started...</h2>
        //                 <p>
        //                     Please agree to these terms for ensuring fair examination
        //                     environment
        //                 </p>
        //                 <ul>
        //                     <li>
        //                         This is a FREE online test. DO NOT pay money to anyone to attend
        //                         this test.
        //                     </li>
        //                     <li>You must keep your camera on during the exam</li>
        //                     <li>No one is allowed around you during this exam </li>
        //                     <li>Total number of questions : 20.</li>
        //                     <li>Each question carry 1 mark, no negative marks.</li>
        //                     <li>Time alloted : 30 minutes.</li>
        //                     <li>DO NOT refresh the page.</li>
        //                 </ul>
        //                 <p>
        //                     The Seven Principles are well established and widely known, but
        //                     they are not static. The Leave No Trace Center for Ethics
        //                     continually examines, evaluates and reshapes the Principles. The
        //                     Center’s Digital Innovation Department conducts research —
        //                     including publishing scholarly articles in independent journals —
        //                     to ensure that the Principles are up to date with the latest
        //                     insights.
        //                 </p>
        //             </div>
        //             <div class="btn-container">
        //                 <button class="btn-accept">I agree!</button>
        //                 <div class="btn-message">Please read first before agreeing.</div>
        //             </div>
        //         </div>
        //     </section>
        // </div>)
        //     .ready(function () {
        //         const nav = document.querySelector('nav');
        //         const header = document.querySelector('header');

        //         const navObserverCallback = (watchEntry, navObserver) => {
        //             if (!watchEntry[0].isIntersecting) {
        //                 nav.classList.add('active');
        //             } else {
        //                 nav.classList.remove('active');
        //             }
        //         }

        //         const navObserverOptions = {
        //             rootMargin: '-110px',
        //             threshold: 0
        //         }

        //         const navObserver = new IntersectionObserver(navObserverCallback, navObserverOptions);

        //         navObserver.observe(header);

        //         // card section

        //         const cards = document.querySelectorAll('.card');

        //         // card callback function
        //         const cardObserverCallback = (cardsToWatch, cardObserver) => {
        //             cardsToWatch.forEach(cardToWatch => {
        //                 if (cardToWatch.isIntersecting) {
        //                     cardToWatch.target.classList.add('fade');
        //                     cardObserver.unobserve(cardToWatch.target);
        //                 }
        //             })
        //         }

        //         //card options
        //         const cardObserverOptions = {
        //             threshold: .5
        //         }

        //         //card observer

        //         const cardObserver = new IntersectionObserver(cardObserverCallback, cardObserverOptions);

        //         //card observer on cards
        //         cards.forEach(card => {
        //             cardObserver.observe(card);
        //         })

        //         // Terms and Conditions

        //         // query selectors
        //         const lastTermsElement = document.querySelector('.terms p:last-child');
        //         const acceptBtn = document.querySelector('.btn-accept');

        //         // callback function
        //         const termsObserverCallback = (lastP, termsObserver) => {
        //             if (lastP[0].isIntersecting) {
        //                 acceptBtn.classList.add('enabled');
        //                 acceptBtn.focus();
        //                 termsObserver.unobserve(lastTermsElement);
        //             };
        //         }

        //         // options 
        //         const termsObserverOptions = {
        //             threshold: 1
        //         }

        //         // observer
        //         const termsObserver = new IntersectionObserver(termsObserverCallback, termsObserverOptions);

        //         // call the observer
        //         termsObserver.observe(lastTermsElement);

        //         // eventlistner
        //         acceptBtn.addEventListener('click', function (e) {
        //             if (!e.target.classList.contains('enabled')) {
        //                 const btnMessage = document.querySelector('.btn-message');
        //                 btnMessage.classList.add('visible');
        //                 setTimeout(function () {
        //                     btnMessage.classList.remove('visible');
        //                 }, '2000');
        //             };
        //         })
        //     }))}