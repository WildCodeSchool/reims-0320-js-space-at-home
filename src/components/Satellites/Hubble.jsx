import React from 'react';

class Hubble extends React.Component {
  constructor(props) {
    super(props);
    this.state = { onScreen: false };
  }

  componentDidMount() {
    this.setState({ onScreen: true });
  }

  componentWillUnmount() {
    this.setState({ onScreen: false });
  }

  render() {
    const { onScreen } = this.state;
    return (
      <div className="satellitesPage">
        <div>
          { onScreen
            ? <iframe src="https://solarsystem.nasa.gov/gltf_embed/2383" title="Hubble 3D" className="satellitesIframe" />
            : null}
        </div>
        <div>
          <h1>Hubble Space Telescope</h1>
          <p>The Hubble Space Telescope (often referred to as HST or Hubble) is a space telescope that was launched into low Earth orbit in 1990 and remains in operation. It was not the first space telescope but it is one of the largest and most versatile, well known both as a vital research tool and as a public relations boon for astronomy. The Hubble telescope is named after astronomer Edwin Hubble and is one of NASA's Great Observatories, along with the Compton Gamma Ray Observatory, the Chandra X-ray Observatory, and the Spitzer Space Telescope. Hubble features a 2.4-meter (7.9 ft) mirror, and its four main instruments observe in the ultraviolet, visible, and near infrared regions of the electromagnetic spectrum.</p>
          <p>Hubble's orbit outside the distortion of Earth's atmosphere allows it to capture extremely high-resolution images with substantially lower background light than ground-based telescopes. It has recorded some of the most detailed visible light images, allowing a deep view into space. Many Hubble observations have led to breakthroughs in astrophysics, such as determining the rate of expansion of the universe.</p>
        </div>
      </div>
    );
  }
}

export default Hubble;
