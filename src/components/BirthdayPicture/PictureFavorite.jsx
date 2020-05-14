import React from 'react';
import './PictureFavorite.css';
import SendBP from '../SendBP/SendBP';

const PictureFavorite = ({ favorites }) => (
  <>
    <div className="pictureFavoriteText">
      <p>
        In this section you can see all the pictures
        you added as your favorite and copy the link of each picture.
      </p>
    </div>
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
    <SendBP
      favorites={favorites}
    />
  </>
);

export default PictureFavorite;
