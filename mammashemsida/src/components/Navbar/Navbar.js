import React from 'react';
import './Navbar.css';

export const Navbar = () => {
    return (
      <div className="wrapper">
        <ul>
          <li>
            <a href="/">Hem</a>
          </li>
          <li >
            <a href="/tjanster">Tjänster</a>
          </li>
          <li>
             <a href="/om hk-redovisning">Om HK Redovisning</a>
          </li>
          <li>
            <a href="/referenser-omdomen">Referenser & Omdömen</a>
          </li>
          <li>
            *fixa en sökruta här*
          </li>
        </ul>
      </div>
    );
  };