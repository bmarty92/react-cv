import React from 'react';
import './style.css'

function Header() {
  const portrait = 'https://i.redd.it/786vtfv1dedz.jpg';
  return (
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
          luctus elit vitae, fermentum ipsum. Quisque et maximus nisl. Aliquam
          laoreet cursus tincidunt. In mauris ipsum, pellentesque eget velit
          tincidunt, lacinia accumsan purus. Morbi vestibulum sem ut lorem
          rutrum malesuada.
        </p>
      </div>
    </header>
  );
}

export default Header;
