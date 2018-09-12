import React from 'react';
import './style.css';

function Main() {
  return (
    <main className="Content">
      <section className="Content-section">
        <div className="Content-section-title">
          <h3>Education</h3>
        </div>
        <div className="Content-section-info">
          <div className="Content-section-info-bold">
            CodeAcademy, Vilnius, Lithuania
          </div>
          <p>
            <b>Major:</b>
            JavaScript
          </p>
          <p>
            <b>Minor:</b>
            Vue.js
          </p>
        </div>
      </section>
      <section className="Content-section">
        <div className="Content-section-title">
          <h3>Skills</h3>
        </div>
        <div className="Content-section-info">
          <div className="Content-section-info-bold">Technical Skills</div>
          <p>
            HTML5, CSS3/SASS/LESS, JavaScript(ES6+), Vue.js, React.js, Node.js,
            Webpack, Redux.js
          </p>
        </div>
      </section>
      <section className="Content-section">
        <div className="Content-section-title">
          <h3>Experience</h3>
        </div>
        <div className="Content-section-info">
          <div className="Content-section-headline">
            <h3>Company</h3>
            <p className="Content-section-subtitle">Jr. Front-end developer</p>
          </div>
          <ul className="Content-section-list">
            <li>Coding</li>
            <li>Googling</li>
            <li>Debuging</li>
            <li>Improving</li>
          </ul>
        </div>
      </section>
      <section className="Content-section">
        <div className="Content-section-title">
          <h3>Hobbies</h3>
        </div>
        <div className="Content-section-info">Web development, IT</div>
      </section>
      <section className="Content-section">
        <div className="Content-section-title">
          <h3>References</h3>
        </div>
        <div className="Content-section-info">Available on request</div>
      </section>
    </main>
  );
}

export default Main;
