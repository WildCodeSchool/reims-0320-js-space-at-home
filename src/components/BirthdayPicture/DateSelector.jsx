import React from 'react';
// import PictureDay from './components/BirthdayPicture/PictureDay';

function DateSelector() {
  return (
    <>
      <div>
        <label htmlFor="date">
          BirthdayPicture
          <input type="date" id="date" name="date" value="2018-07-22" min="1995-06-16" max="2020-04-01" />
        </label>
      </div>
      <div>
        <button type="button">Valider</button>
      </div>
    </>
  );
}

export default DateSelector;
