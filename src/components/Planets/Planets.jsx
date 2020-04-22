import React from 'react';

const PlanetsTable = [
  {
    name: 'Sun',
    iframe: <iframe title="Sun3D" src="https://solarsystem.nasa.gov/gltf_embed/2352" width="100%" height="450px" frameBorder="0" />,
    type: 'Star',
  },
  {
    name: 'Mercury',
    iframe: <iframe title="Mercury3D" src="https://solarsystem.nasa.gov/gltf_embed/2369" width="100%" height="450px" frameBorder="0" />,
    type: 'Telluric',
  },
  {
    name: 'Venus',
    iframe: <iframe title="Venus3D" src="https://solarsystem.nasa.gov/gltf_embed/2343" width="100%" height="450px" frameBorder="0" />,
    type: 'Telluric',
  },
  {
    name: 'Earth',
    iframe: <iframe title="Earth3D" src="https://solarsystem.nasa.gov/gltf_embed/2392" width="200%" height="500px" frameBorder="0" />,
    type: 'Telluric',
  },
  {
    name: 'Mars',
    iframe: <iframe title="Mars3D" src="https://solarsystem.nasa.gov/gltf_embed/2372" width="100%" height="450px" frameBorder="0" />,
    type: 'Telluric',
  },
  {
    name: 'Jupiter',
    iframe: <iframe title="Jupiter3D" src="https://solarsystem.nasa.gov/gltf_embed/2375" width="100%" height="450px" frameBorder="0" />,
    type: 'Gas Giant',
  },
  {
    name: 'Saturne',
    iframe: <iframe title="Saturne3D" src="https://solarsystem.nasa.gov/gltf_embed/2355" width="100%" height="450px" frameBorder="0" />,
    type: 'Gas Giant',
  },
  {
    name: 'Neptune',
    iframe: <iframe title="Neptune3D" src="https://solarsystem.nasa.gov/gltf_embed/2364" width="100%" height="450px" frameBorder="0" />,
    type: 'Ice Giant',
  },
];


class Planets extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    return (
      <>
        {PlanetsTable.map((element) => (
          <div className="OpenCard">
            <br />
            <div className="block">
              <div className="Circle">
                {element.iframe}
              </div>
              <div className="CategoriesTitle">
                <h2>{element.name}</h2>
                <p>
                  {element.type}
                </p>
                <p>
                  Vivamus id ex ut ante faucibus sodales quis at tellus.Proin lectus dolor, convallis non rutrum in, mollis nec magna.
                  Vestibulum pulvinar, urna et consectetur malesuada, est eros rutrum justo, eu aliquet enim tellus id quam.
                  Integer accumsan ex metus, finibus euismod eros imperdiet quis.Phasellus rhoncus turpis vehicula magna volutpat aliquam.
                </p>
              </div>
            </div>
          </div>
        ))}
      </>
    );
  }
}

export default Planets;
