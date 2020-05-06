import React from 'react';
import './Contact.css';

const copyrightYear = new Date();
const currentYear = copyrightYear.getFullYear();

function Contact() {
  return (
    <>
      <div className="titleContact">
        <p>Born in Space</p>
      </div>
      <div className="contactContact">
        <div className="createdContact">
          <h3>Created by :</h3>
          <a href="https://www.linkedin.com/in/martin-gilbert-23452b1a3/"><p>Martin Gilbert</p></a>
          <a href="https://www.linkedin.com/in/victor-veyrier-ab6948194/"><p>Victor Veyrier</p></a>
          <a href="https://www.linkedin.com/in/brian-lagaude-4110b31a4/"><p>Brian Lagaude</p></a>
          <a href="https://www.linkedin.com/in/victor-auxietre-fontes-6a8439184/"><p>Victor Auxietre-Fontes</p></a>
        </div>
        <div className="explanationContact">
          <p>Created with React and using NASA APIs</p>
        </div>
        <div className="copyrightContact">
          <small>
            &#169;Copyright
            { currentYear.toString() }
            , Born in Space.
          </small>
        </div>
      </div>
    </>
  );
}

export default Contact;
