import React from 'react'
import Axios from 'axios'

class PictureDay extends React.Component {
  constructor() {
    super();
    this.state = {
      url: "https://via.placeholder.com/550",
      concept: "Reste à l'écran"
    };
    this.getPicture = this.getPicture.bind(this);
  }

  componentDidMount() {
    this.getPicture();
  }

    getPicture = () => {
      Axios.get("https://api.nasa.gov/planetary/apod?api_key=tJEyrCHFpmMVohJmDqxBnDac7xXMWQeEUeYNIcKc")
        .then((response) => response.data)
        .then((data) => {
          this.setState({
            url: data.url,
            concept: data.explanation,
          });
        });
    }

    render() {
      const { url } = this.state;
      const { concept } = this.state;
      return (
        <>
          <img src={url} alt="" />
          <p>{concept}</p>
        </>
      );
    }
}

export default PictureDay;
