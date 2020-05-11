import React from 'react';
import './PictureFavorite.css';

const PictureFavorite = ({ favorites }) => {
  return (
    favorites.map((favorite) => {
      return (
        <div className="galleryBlock">
          <img className="galleryImage" src={favorite.url} alt="" />
          <p className="galleryConcept">{favorite.concept}</p>
        </div>
      );
    })
  );
};

export default PictureFavorite;
