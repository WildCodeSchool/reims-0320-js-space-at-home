import React from 'react';
import Axios from 'axios';
import './pictureDay.css';
import dateFormat from 'dateformat';

function today() {
  return (
    dateFormat(new Date(), 'yyyy-mm-dd')
  );
}
class PictureDay extends React.Component {
  constructor() {
    super();
    this.state = {
      url: 'https://via.placeholder.com/550',
      concept: 'Explication photo du jour',
      dateComp: today(),
    };
    this.getPicture = this.getPicture.bind(this);
  }

  componentDidMount() {
    this.getPicture();
  }

  componentDidUpdate(prevProps, prevState) {
    const { dateComp } = this.state;
    if (prevState.dateComp !== dateComp) {
      this.getPicture();
    }
  }

    getPicture = () => {
      const { dateComp } = this.state;
      const url = `https://api.nasa.gov/planetary/apod?date=${dateComp}&api_key=tJEyrCHFpmMVohJmDqxBnDac7xXMWQeEUeYNIcKc`;
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
      const {
        url, concept, dateComp,
      } = this.state;
      return (
        <>
          <div>
            <label htmlFor="date">
              BirthdayPicture
              <input
                type="date"
                id="date"
                name="date"
                value={dateComp}
                min="1995-06-16"
                max={today()}
                onChange={(event) => {
                  this.setState({ dateComp: event.target.value });
                }}
              />
            </label>
          </div>
          <div className="eventPage">
            <h1 className="eventTitle">Picture of The Day :</h1>
            <div className="eventBlock">
              {url.includes('youtube')
                ? <iframe src={url} title="youtubeVideo" allowFullScreen="true" />
                : <img className="eventImage" src={url} alt="pictureDay" />}
              <p className="eventText">{concept}</p>
            </div>
          </div>
        </>
      );
    }
}

export default PictureDay;
