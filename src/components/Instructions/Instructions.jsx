import React from 'react';
import './Instructions.css';

function Instructions() {
  return (
    <div className="instructionsBlock">
      <p className="instructionsText">
        Welcome to Born in Space!
        In this wep-app, you will be able to have a look at
        the picture of the day chosen by the NASA.
        You can also enter your birthdate in the search bar to discover
        what was the “picture of the day” on
        the day you were born.
        Unfortunately, this feature will only work if you are born after June 16th,
        1995, this date included.
        But nothing prevents you from trying it out with your friends’ birthdates!
        You can also use your personal gallery
        to save pictures from the dates that have marked your life,
        such as marriages, births… and directly access these images links.
        On this site, you will also find a section where to type a keyword
        that will you return you a collection of images, to let you find your favourite planet,
        for example!
      </p>
    </div>
  );
}
export default Instructions;
