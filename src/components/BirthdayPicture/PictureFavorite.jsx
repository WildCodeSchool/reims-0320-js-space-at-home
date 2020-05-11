import React from 'react';
import './PictureFavorite.css';

const PictureFavorite = ({ favorites }) => {
  return (
    <div className="galleryBlock">
      {favorites.map((favorite) => {
        return (
          <div>
            <img className="galleryImage" src={favorite.url} alt="" />
            <p className="galleryConcept">{favorite.concept}</p>
          </div>
        );
      })}
    </div>
  );
};

export default PictureFavorite;
