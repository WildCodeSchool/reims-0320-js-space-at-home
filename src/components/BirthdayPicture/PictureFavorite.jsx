import React from 'react';
import './PictureFavorite.css';

const PictureFavorite = ({ favorites }) => {
  return (
    <div className="galleryBlock">
      {favorites.map((favorite) => {
        return (
          <div className="cardPicture">
            {favorite.url.includes('youtube')
              ? <iframe className="eventIframe" src={favorite.url} title="youtubeVideo" allowFullScreen />
              : <img className="galleryImage" src={favorite.url} alt="" />}
            <h3 className="nameImage">{favorite.chosenName}</h3>
            <details>
              <summary className="seeConcept">voir plus</summary>
              <p className="galleryConcept">{favorite.concept}</p>
            </details>
          </div>
        );
      })}
    </div>
  );
};

export default PictureFavorite;
