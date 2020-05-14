import React from 'react';
import './Instructions.css';

function Instructions() {
  return (
    <div className="instructionsBlock">
      <p className="instructionsText">
        Welcome to Born In Space, in this Web-App you will be able to have
        a look at the picture of the day from the NASA.
        Otherwise, by typing your birth date on the search bar you
        should be able to see what the picture of the day was when you were born.
        Unfortunately, it will only works if you are born after the 16 June 1995,
        including this date.
        But nothing stop you from trying your friends date !
        You can also add photos of the dates that have marked your life! Marriage, births..
        for example and consult them on your personal gallery.
        The image link, if you find it useful, is in your gallery.
        You will also have a section to type a keyword that will return
        you an image collection so you can found your favorite planet !
      </p>
    </div>
  );
}
export default Instructions;
