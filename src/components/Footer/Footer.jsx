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
            <div id="name1">
              <a href="https://www.linkedin.com/in/martin-gilbert-23452b1a3/"><p>Martin Gilbert</p></a>
              <a href="https://www.linkedin.com/in/victor-veyrier-ab6948194/"><p>Victor Veyrier</p></a>
            </div>
            <div id="name2">
              <a href="https://www.linkedin.com/in/brian-lagaude-4110b31a4/"><p>Brian Lagaude</p></a>
              <a href="https://www.linkedin.com/in/victor-auxietre-fontes-6a8439184/"><p>Victor Auxietre-Fontes</p></a>
            </div>
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
