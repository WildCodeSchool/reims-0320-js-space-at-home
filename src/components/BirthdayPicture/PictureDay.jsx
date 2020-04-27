import React from 'react';
import Axios from 'axios';
import './pictureDay.css';

class PictureDay extends React.Component {
  constructor() {
    super();
    this.state = {
      url: 'https://via.placeholder.com/550',
      concept: 'Explication photo du jour',
      dateYear: new Date().getFullYear(),
      dateMonth: new Date().getMonth() + 1,
      dateDay: new Date().getDate(),
    };
    this.getPicture = this.getPicture.bind(this);
  }

  componentDidMount() {
    this.getPicture();
  }

    getPicture = () => {
      const { dateYear, dateMonth, dateDay } = this.state;
      const url = `https://api.nasa.gov/planetary/apod?date=${dateYear}-${dateMonth}-${dateDay}&api_key=tJEyrCHFpmMVohJmDqxBnDac7xXMWQeEUeYNIcKc`;
      Axios.get(url)
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
            {url.includes('youtube')
              ? <iframe src={url} title="youtubeVideo" allowFullScreen="true" />
              : <img className="eventImage" src={url} alt="pictureDay" />}
            <p className="eventText">{concept}</p>
          </div>
        </div>
      );
    }
}

export default PictureDay;
