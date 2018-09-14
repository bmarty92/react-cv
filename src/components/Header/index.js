import React from 'react';
import data from './data';
import './style.css';

function Header() {
  const { title, image, phone, email, about } = data;
  return (
    <header className="Header">
      <h1 className="Header-headline">{title}</h1>
      <hr />
      <img className="Header-image" src={image.src} alt={image.alt} />
      <div className="Header-content">
        {phone && (<p>
          <b>{phone.title}</b> {phone.number}
        </p>)}
        {email && (<p>
          <b>{email.title}</b> {email.value}
        </p> )}
        <p className="Header-content-about">{about}</p>
      </div>
    </header>
  );
}

export default Header;
