import React from 'react';
import '../styles/footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-copyright">
          Let's get in touch
      </div>
      <div className="footer-links">
        <p href="_blank">Email me <FontAwesomeIcon icon={faEnvelope} /></p>
      </div>
    </div>

  );
}

export default Footer;
