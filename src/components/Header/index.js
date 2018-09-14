import React from 'react';
import PropTypes from 'prop-types';
import data from './data';
import './style.css';

function Header(props) {
  const { language, onClick } = props;
  const { title, image, phone, email, about } = data[language];
  return (
    <header className="Header">
      <div className="Header-language-switch">
        <button type="button" onClick={() => onClick('en')}>
          English
        </button>
        <button type="button" onClick={() => onClick('lt')}>
          Lithuanian
        </button>
      </div>
      <h1 className="Header-headline">{title}</h1>
      <hr />
      <img className="Header-image" src={image.src} alt={image.alt} />
      <div className="Header-content">
        {phone && (
          <p>
            <b>{phone.title}</b> {phone.number}
          </p>
        )}
        {email && (
          <p>
            <b>{email.title}</b> {email.value}
          </p>
        )}
        <p className="Header-content-about">{about}</p>
      </div>
    </header>
  );
}

Header.propTypes = {
  language: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Header;
