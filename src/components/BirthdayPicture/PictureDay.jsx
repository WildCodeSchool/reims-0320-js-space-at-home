import React from 'react';
import Axios from 'axios';
import './pictureDay.css';
import dateFormat from 'dateformat';
import { Button } from 'reactstrap';
import Aos from 'aos';
import 'aos/dist/aos.css';

const today = () => dateFormat(new Date(), 'yyyy-mm-dd');
class PictureDay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: 'https://via.placeholder.com/550',
      concept: 'Explication photo du jour',
      dateComp: today(),
      chosenName: '',
    };
    this.getPicture = this.getPicture.bind(this);
    this.addFav = this.addFav.bind(this);
  }

  componentDidMount() {
    this.getPicture();
    Aos.init({ duration: 1200 });
  }

  componentDidUpdate(prevProps, prevState) {
    Aos.init({ duration: 1200 });
    const { dateComp, chosenName } = this.state;
    if (prevState.dateComp !== dateComp) {
      this.getPicture();
    }
    if (prevState.chosenName !== chosenName) {
      this.addFav();
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

  addFav = () => {
    const { url, concept, chosenName } = this.state;
    const { addToFavorite } = this.props;
    addToFavorite({ url, concept, chosenName });
  };

  render() {
    const {
      url, concept, dateComp, chosenName,
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
        <div className="eventSelectorBlock">
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
          <div className="eventAllButton">
            <Button className="eventButton" type="button" onClick={() => prevNext('-')}>
              Previous Day
            </Button>
            <Button className="eventButton" type="button" onClick={() => prevNext('+')}>
              Next Day
            </Button>
          </div>
        </div>
        <div>
          <h1 className="eventTitle">Picture at your birthday :</h1>
          <div className="eventBlock">
            {url.includes('youtube')
              ? <iframe className="eventIframe" src={url} title="youtubeVideo" allowFullScreen />
              : <div><img className="eventImage" src={url} alt="pictureDay" /></div>}
            <p data-aos="fade-up" className="eventText">{concept}</p>
            <form
              onSubmit={(event) => {
                const chosenNameIn = new FormData(event.target).get('chosenName');
                this.setState({ chosenName: chosenNameIn });
                event.preventDefault();
              }}
            >
              <label htmlFor="chosenName">
                <input type="text" id="chosenName" name="chosenName" />
              </label>
              <button className="favButton" type="submit">
                Ajouter
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default PictureDay;
