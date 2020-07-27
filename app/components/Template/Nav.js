import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import data from '../../data/contact';

const Nav = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${BASE_PATH}/images/me.jpeg`} alt="" />
      </Link>
      <header>
        <h2>Clever Aaron Mukori</h2>
        <p><a href="mailto:cmukori@learnorteach.com">cmukori@learnorteach.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Clever. I like building things.
        I am a <a href = "https://www.concordiacollege.edu/" > Concordia College </a> graduate,
        the founder of <a href="https://learnorteach.com">Learn Or Teach</a> and <a href="https://gileadmd.com">GileadMD</a>.
      </p>
      <ul className="actions">
        <li>
          {window.location.pathname !== `${BASE_PATH}/resume` ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ul className="icons">
        {data.map((s) => (
          <li key={s.label}>
            <a href={s.link}>
              <FontAwesomeIcon icon={s.icon} />
            </a>
          </li>
        ))}
      </ul>
      <p className="copyright">&copy; Clever Mukori <Link to="/">cmukori.com</Link>.</p>
    </section>
  </section>
);

export default Nav;
