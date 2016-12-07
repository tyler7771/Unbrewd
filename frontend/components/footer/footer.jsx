import React from 'react';
import { Link } from 'react-router';

const Footer = ({currentUser, logout}) => {
  return (
    <footer>
      <div className="footer-content">
        <a href="https://github.com/tyler7771">GitHub</a>
        <a href="https://www.linkedin.com/in/tyler7771">LinkedIn</a>
        <a href="mailto:tyler.fields777@gmail.com">Contact</a>
      </div>
    </footer>
  );
};

export default Footer;
