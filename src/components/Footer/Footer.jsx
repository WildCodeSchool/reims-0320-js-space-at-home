import React from 'react';
import './Footer.css';

const copyrightYear = new Date();
const currentYear = copyrightYear.getFullYear();

function Footer() {
  return (
    <footer className="footerBlock">
      <div className="titleFooter">
        <p>Born in Space</p>
      </div>
      <div className="contactFooter">
        <div className="createdFooter">
          <h3>Created by :</h3>
          <div className="nameFooter">
            <p>Victor Auxietre-Fontes</p>
            <p>Martin Gilbert</p>
            <p>Victor Veyrier</p>
            <p>Brian Lagaude</p>
          </div>
        </div>
        <div className="explanationFooter">
          <p>Created with React and using NASA APIs</p>
        </div>
        <div className="copyrightFooter">
          <small>
            &#169;Copyright
            { currentYear.toString() }
            , Born in Space.
          </small>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
