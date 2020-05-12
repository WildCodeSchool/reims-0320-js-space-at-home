import React from 'react';
import './PictureFavorite.css';

const PictureFavorite = ({ favorites }) => {
  return (
    <div className="galleryBlock">
      {favorites.map((favorite) => {
        return (
          <div>
            <h1>{favorite.chosenName}</h1>
            {favorite.url.includes('youtube')
              ? <iframe className="eventIframe" src={favorite.url} title="youtubeVideo" allowFullScreen />
              : <img className="galleryImage" src={favorite.url} alt="" />}
            <p className="galleryConcept">{favorite.concept}</p>
          </div>
        );
      })}
    </div>
  );
};

export default PictureFavorite;
