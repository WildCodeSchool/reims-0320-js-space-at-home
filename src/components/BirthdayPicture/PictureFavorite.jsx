import React from 'react';
import './PictureFavorite.css';
import SendBP from '../SendBP/SendBP';

const PictureFavorite = ({ favorites }) => (
  <>
    <div className="galleryBlock">
      {favorites.map((favorite) => (
        <div>
          <h1>{favorite.chosenName}</h1>
          {favorite.url.includes('youtube')
            ? <iframe className="eventIframe" src={favorite.url} title="youtubeVideo" allowFullScreen />
            : <img className="galleryImage" src={favorite.url} alt={favorite.chosenName} />}
          <p className="galleryConcept">{favorite.concept}</p>
        </div>
      ))}
    </div>
    <SendBP
      favorites={favorites}
    />
  </>
);

export default PictureFavorite;
