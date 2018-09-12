import React from 'react';
import Icon from 'react-fontawesome';
// import 'reset-css';
import './App.css';

function App() {
  const portrait = 'https://i.redd.it/786vtfv1dedz.jpg';
  return (
    <div className="App">
      <div className="App-container">
        <header className="Header">
          <h1 className="Header-headline">Martynas Bušinskas</h1>
          <hr />
          <img
            className="Header-image"
            src={portrait}
            alt="cthulhu proffesional portrait"
          />
          <div className="Header-content">
            <p>
              <b>Phone:</b> +37061240963
            </p>
            <p>
              <b>Email:</b> martynas.businskas@gmail.com
            </p>
            <p className="Header-content-about">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              hendrerit quis arcu ac porttitor. Cras metus mauris, varius vitae
              semper at, consectetur varius nibh. Vivamus tortor eros, auctor ac
              mauris eget, consequat pulvinar quam. Maecenas nec leo placerat,
              luctus elit vitae, fermentum ipsum. Quisque et maximus nisl.
              Aliquam laoreet cursus tincidunt. In mauris ipsum, pellentesque
              eget velit tincidunt, lacinia accumsan purus. Morbi vestibulum sem
              ut lorem rutrum malesuada.
            </p>
          </div>
        </header>
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
                HTML5, CSS3/SASS/LESS, JavaScript(ES6+), Vue.js, React.js,
                Node.js, Webpack, Redux.js
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
                <p className="Content-section-subtitle">
                  Jr. Front-end developer
                </p>
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
      </div>
      <hr />
      <footer className="Footer">
        <a href="mailto:aaa@aaa.com" target="_blank" rel="noopener noreferrer">
          <Icon name="envelope" />
        </a>
        <a
          href="https://linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon name="linkedin" />
        </a>
        <a href="tel:+37061240963" target="_blank" rel="noopener noreferrer">
          <Icon name="phone" />
        </a>
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
          <Icon name="github" />
        </a>
      </footer>
    </div>
  );
}

export default App;
