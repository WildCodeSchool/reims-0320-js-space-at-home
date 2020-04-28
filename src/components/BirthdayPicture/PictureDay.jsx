import React from 'react';
import Axios from 'axios';
import './pictureDay.css';
import dateFormat from 'dateformat';

const today = () => dateFormat(new Date(), 'yyyy-mm-dd');
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
      const url = `https://api.nasa.gov/planetary/apod?date=${dateComp}&hd=true&api_key=tJEyrCHFpmMVohJmDqxBnDac7xXMWQeEUeYNIcKc`;
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
      const prevNext = (operator) => {
        const date = new Date(dateComp);

        if (operator === '+') {
          date.setDate(date.getDate() + 1);
        } else {
          date.setDate(date.getDate() - 1);
        }
        if ((date <= new Date()) && (date >= new Date('1995-06-16'))) {
          this.setState({ dateComp: dateFormat(date, 'yyyy-mm-dd') });
        }
      };
      return (
        <div className="eventPage">
          <div className="eventPage">
            <label htmlFor="date" className="eventLabelSelector">
              Select your Birthday :
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
            <button type="button" onClick={() => prevNext('-')}>
              Previous Day
            </button>
            <button type="button" onClick={() => prevNext('+')}>
              Next Day
            </button>
          </div>
          <div>
            <h1 className="eventTitle">Picture at your birthday :</h1>
            <div className="eventBlock">
              {url.includes('youtube')
                ? <iframe src={url} title="youtubeVideo" allowFullScreen="true" />
                : <div><img className="eventImage" src={url} alt="pictureDay" /></div>}
              <p className="eventText">{concept}</p>
            </div>
          </div>
        </div>
      );
    }
}

export default PictureDay;
