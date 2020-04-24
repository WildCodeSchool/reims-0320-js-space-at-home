import React from 'react';
import './Moon.css';

const moonsList = [
  {
    name: 'Earth\'s Moon',
    iframe: <iframe title="Moon 3D" src="https://solarsystem.nasa.gov/gltf_embed/2366" width="100%" height="450px" frameBorder="0" />,
    planet: 'Earth',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa ducimus ratione tempora dolorum tempore. Laudantium nesciunt minima inventore sunt porro optio illo',
  },
  {
    name: 'Deimos',
    iframe: <iframe title="Deimos3D" src="https://solarsystem.nasa.gov/gltf_embed/2434" width="100%" height="450px" frameBorder="0" />,
    planet: 'Mars',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa ducimus ratione tempora dolorum tempore. Laudantium nesciunt minima inventore sunt porro optio illo',
  },
  {
    name: 'Phebos',
    iframe: <iframe title="Phebos 3D" src="https://solarsystem.nasa.gov/gltf_embed/2358" width="100%" height="450px" frameBorder="0" />,
    planet: 'Mars',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa ducimus ratione tempora dolorum tempore. Laudantium nesciunt minima inventore sunt porro optio illo',
  },
  {
    name: 'Europa',
    iframe: <iframe title="Europa 3D" src="https://solarsystem.nasa.gov/gltf_embed/2388" width="100%" height="450px" frameBorder="0" />,
    planet: 'Jupiter',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa ducimus ratione tempora dolorum tempore. Laudantium nesciunt minima inventore sunt porro optio illo',
  },
  {
    name: 'Ganymède',
    iframe: <iframe title="Ganymede 3D" src="https://solarsystem.nasa.gov/gltf_embed/2385" width="100%" height="450px" frameBorder="0" />,
    planet: 'Jupiter',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa ducimus ratione tempora dolorum tempore. Laudantium nesciunt minima inventore sunt porro optio illo',
  },
  {
    name: 'IO',
    iframe: <iframe title="IO 3D" src="https://solarsystem.nasa.gov/gltf_embed/2379" width="100%" height="450px" frameBorder="0" />,
    planet: 'Jupiter',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa ducimus ratione tempora dolorum tempore. Laudantium nesciunt minima inventore sunt porro optio illo',
  },
  {
    name: 'Callisto',
    iframe: <iframe title="Callisto 3D" src="https://solarsystem.nasa.gov/gltf_embed/2402" width="100%" height="450px" frameBorder="0" />,
    planet: 'Jupiter',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa ducimus ratione tempora dolorum tempore. Laudantium nesciunt minima inventore sunt porro optio illo',
  },
  {
    name: 'Titan',
    iframe: <iframe title="Titan 3D" src="https://solarsystem.nasa.gov/gltf_embed/2349" width="100%" height="450px" frameBorder="0" />,
    planet: 'Saturn',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa ducimus ratione tempora dolorum tempore. Laudantium nesciunt minima inventore sunt porro optio illo',
  },
  {
    name: 'Miranda',
    iframe: <iframe title="Miranda 3D" src="https://solarsystem.nasa.gov/gltf_embed/2367" width="100%" height="450px" frameBorder="0" />,
    planet: 'Uranus',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa ducimus ratione tempora dolorum tempore. Laudantium nesciunt minima inventore sunt porro optio illo',
  },
  {
    name: 'Triton',
    iframe: <iframe title="Triton 3D" src="https://solarsystem.nasa.gov/gltf_embed/2346" width="100%" height="450px" frameBorder="0" />,
    planet: 'Neptune',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa ducimus ratione tempora dolorum tempore. Laudantium nesciunt minima inventore sunt porro optio illo',
  },
];

class Moons extends React.Component {
  constructor(props) {
    super(props);
    this.state = { moonsIndex: 3 };
  }

  nextMoon = () => {
    this.setState({ moonsIndex: this.state.moonsIndex + 1 });
  }

  previousMoon = () => {
    this.setState({ moonsIndex: this.state.moonsIndex - 1 });
  }

  render() {
    return (
      <>
        <button type="button" onClick={this.nextMoon}>
          Next Moon
        </button>
        <button type="button" onClick={this.previousMoon}>
          Previous Moon
        </button>
        <div className="OpenCard">
          <div className="block">
            <div className="Circle">
              {moonsList[this.state.moonsIndex].iframe}
            </div>
            <div className="CategoriesTitle">
              <h2>{moonsList[this.state.moonsIndex].name}</h2>
              <p>
                {moonsList[this.state.moonsIndex].text}
              </p>
            </div>
          </div>
        </div>
        ))
      </>
    );
  }
}

export default Moons;
