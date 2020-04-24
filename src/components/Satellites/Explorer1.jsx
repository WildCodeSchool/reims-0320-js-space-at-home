import React from 'react';

class Explorer1 extends React.Component {
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
            ? <iframe src="https://solarsystem.nasa.gov/gltf_embed/2386" title="Explorer 1" className="satellitesIframe" />
            : null}
        </div>
        <div className="satellitesText">
          <h1>Explorer 1</h1>
          <p>Explorer 1 was the first satellite launched by the United States, and was part of the U.S. participation in the International Geophysical Year. The mission followed the first two satellites the previous year; the Soviet Union's Sputnik 1 and 2, beginning the Cold War Space Race between the two nations.</p>
          <p>Explorer 1 was launched on January 31, 1958, at 22:48 Eastern Time (February 1, 03:48 UTC) atop the first Juno booster from LC-26 at the Cape Canaveral Missile Annex, Florida. It was the first spacecraft to detect the Van Allen radiation belt,[2] returning data until its batteries were exhausted after nearly four months. It remained in orbit until 1970, and has been followed by more than 90 scientific spacecraft in the Explorer series.</p>
          <p>Explorer 1 was given Satellite Catalog Number 4, and the Harvard designation 1958 Alpha 1, the forerunner to the modern International Designator.</p>
        </div>
      </div>
    );
  }
}

export default Explorer1;
