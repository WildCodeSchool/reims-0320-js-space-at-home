import React from 'react';
import './Planets.css';

const PlanetsTable = [
  {
    name: 'Sun',
    iframe: <iframe title="Sun3D" src="https://solarsystem.nasa.gov/gltf_embed/2352" width="150%" height="450px" frameBorder="0" />,
    type: 'Star',
  },
  {
    name: 'Mercury',
    iframe: <iframe title="Mercury3D" src="https://solarsystem.nasa.gov/gltf_embed/2369" width="150%" height="450px" frameBorder="0" />,
    type: 'Telluric',
  },
  {
    name: 'Venus',
    iframe: <iframe title="Venus3D" src="https://solarsystem.nasa.gov/gltf_embed/2343" width="150%" height="450px" frameBorder="0" />,
    type: 'Telluric',
  },
  {
    name: 'Earth',
    iframe: <iframe title="Earth3D" src="https://solarsystem.nasa.gov/gltf_embed/2392" width="150%" height="500px" frameBorder="0" />,
    type: 'Telluric',
  },
  {
    name: 'Mars',
    iframe: <iframe title="Mars3D" src="https://solarsystem.nasa.gov/gltf_embed/2372" width="150%" height="450px" frameBorder="0" />,
    type: 'Telluric',
  },
  {
    name: 'Jupiter',
    iframe: <iframe title="Jupiter3D" src="https://solarsystem.nasa.gov/gltf_embed/2375" width="150%" height="450px" frameBorder="0" />,
    type: 'Gas Giant',
  },
  {
    name: 'Saturne',
    iframe: <iframe className="iframe" title="Saturne3D" src="https://solarsystem.nasa.gov/gltf_embed/2355" width="150%" height="450px" frameBorder="0" />,
    type: 'Gas Giant',
  },
  {
    name: 'Neptune',
    iframe: <iframe title="Neptune3D" src="https://solarsystem.nasa.gov/gltf_embed/2364" width="150%" height="450px" frameBorder="0" />,
    type: 'Ice Giant',
  },
];

class Planets extends React.Component {
  constructor(props) {
    super(props);
    this.state = { planetIndex: 3 };
  }

  nextPlanet = () => {
    const { planetIndex } = this.state;
    this.setState({ planetIndex: planetIndex + 1 });
  }

  previousPlanet = () => {
    const { planetIndex } = this.state;
    this.setState({ planetIndex: planetIndex - 1 });
  }

  render() {
    const { planetIndex } = this.state;
    return (
      <>
        <div className="buttonDiv">
          <button className="buttonPlanet" type="button" onClick={this.previousPlanet}>
            Inner Planet
          </button>
          <button className="buttonPlanet" type="button" onClick={this.nextPlanet}>
            Outer Planet
          </button>
        </div>
        <div className="OpenCard">
          <br />
          <div className="block">
            <div className="Circle">
              {PlanetsTable[planetIndex].iframe}
            </div>
            <div className="CategoriesTitle">
              <h2>{PlanetsTable[planetIndex].name}</h2>
              <p>
                {PlanetsTable[planetIndex].type}
              </p>
              <p>
                Vivamus id ex ut ante faucibus sodales quis at tellus.Proin lectus dolor,
                convallis non rutrum in, mollis nec magna.
                Vestibulum pulvinar, urna et consectetur malesuada,
                est eros rutrum justo, eu aliquet enim tellus id quam.
                Integer accumsan ex metus, finibus euismod eros imperdiet quis.
                Phasellus rhoncus turpis vehicula magna volutpat aliquam.
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Planets;
