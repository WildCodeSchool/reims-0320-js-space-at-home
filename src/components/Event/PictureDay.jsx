import React from 'react';
import Axios from 'axios';
import './pictureDay.css';

class PictureDay extends React.Component {
  constructor() {
    super();
    this.state = {
      url: 'https://via.placeholder.com/550',
      concept: "Reste à l'écran",
    };
    this.getPicture = this.getPicture.bind(this);
  }

  componentDidMount() {
    this.getPicture();
  }

    getPicture = () => {
      Axios.get('https://api.nasa.gov/planetary/apod?api_key=tJEyrCHFpmMVohJmDqxBnDac7xXMWQeEUeYNIcKc')
        .then((response) => response.data)
        .then((data) => {
          this.setState({
            url: data.url,
            concept: data.explanation,
          });
        });
    }

    render() {
      const { url, concept } = this.state;
      return (
        <div className="eventPage">
          <h1 className="eventTitle">Picture of The Day :</h1>
          <div className="eventBlock">
            <img className="eventImage" src={url} alt="" />
            <p className="eventText">{concept}</p>
          </div>
        </div>
      );
    }
}

export default PictureDay;