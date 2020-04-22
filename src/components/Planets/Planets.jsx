import React from 'react';

const PlanetsTable = [
  {
    name: 'Sun',
    iframe: <iframe title="Sun3D" src="https://solarsystem.nasa.gov/gltf_embed/2352" width="100%" height="450px" frameBorder="0" />,
    type: '',
  },
  {
    name: 'Mercury',
    iframe: <iframe title="Mercury3D" src="https://solarsystem.nasa.gov/gltf_embed/2369" width="100%" height="450px" frameBorder="0" />,
    type: '',
  },
  {
    name: 'Venus',
    iframe: <iframe title="Venus3D" src="https://solarsystem.nasa.gov/gltf_embed/2343" width="100%" height="450px" frameBorder="0" />,
    type: '',
  },
  {
    name: 'Earth',
    iframe: <iframe title="Earth3D" src="https://solarsystem.nasa.gov/gltf_embed/2392" width="200%" height="500px" frameBorder="0" />,
    type: '',
  },
  {
    name: 'Mars',
    iframe: <iframe title="Mars3D" src="https://solarsystem.nasa.gov/gltf_embed/2372" width="100%" height="450px" frameBorder="0" />,
    type: '',
  },
  {
    name: 'Jupiter',
    iframe: <iframe title="Jupiter3D" src="https://solarsystem.nasa.gov/gltf_embed/2375" width="100%" height="450px" frameBorder="0" />,
    type: '',
  },
  {
    name: 'Saturne',
    iframe: <iframe title="Saturne3D" src="https://solarsystem.nasa.gov/gltf_embed/2355" width="100%" height="450px" frameBorder="0" />,
    type: '',
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
      <div>
        <p>Hello World</p>
      </div>
    );
  }
}

export default Planets;
