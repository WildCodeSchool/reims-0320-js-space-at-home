import React from 'react';
import './Moon.css';

const moonsList = [
  {
    name: 'Earth\'s Moon',
    iframe: <iframe title="Moon 3D" src="https://solarsystem.nasa.gov/gltf_embed/2366" width="100%" height="450px" frameBorder="0" />,
    planet: 'Earth',
    text: 'Our moon makes Earth a more livable planet. The moon was likely formed after a Mars-sized body collided with Earth and the debris formed into the most prominent feature in our night sky. During the Apollo program of the 1960s and \'70s, NASA sent nine missions to the Moon. Six of them landed astronauts safely on the surface, the only times humans have visited another world.',
  },
  {
    name: 'Deimos',
    iframe: <iframe title="Deimos3D" src="https://solarsystem.nasa.gov/gltf_embed/2434" width="100%" height="450px" frameBorder="0" />,
    planet: 'Mars',
    text: 'Deimos is the smaller of Mars\'s two moons. It is a dark body that appears to be composed of C-type surface materials, similar to that of asteroids found in the outer asteroid belt. Deimos was discovered on Aug. 11, 1877 by Asaph Hall who named Mars\'s moons for the mythological sons of Ares, the Greek counterpart of the Roman god, Mars. Deimos, whose name means dread, is the brother of Phobos.',
  },
  {
    name: 'Phobos',
    iframe: <iframe title="Phebos 3D" src="https://solarsystem.nasa.gov/gltf_embed/2358" width="100%" height="450px" frameBorder="0" />,
    planet: 'Mars',
    text: 'Phobos is the larger of Mars\'s two moons and was discovered on Aug. 17, 1877 by Asaph Hall who named Mars\'s moons for the mythological sons of Ares, the Greek counterpart of the Roman god, Mars. Phobos, whose name means fear or panic, is the brother of Deimos.',
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
    this.state = { moonsIndex: 2 };
  }

  nextMoon = () => {
    const { moonsIndex } = this.state;
    this.setState({ moonsIndex: moonsIndex + 1 });
  }

  previousMoon = () => {
    const { moonsIndex } = this.state;
    this.setState({ moonsIndex: moonsIndex - 1 });
  }

  render() {
    const { moonsIndex } = this.state;
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
              {moonsList[moonsIndex].iframe}
            </div>
            <div className="CategoriesTitle">
              <h2>{moonsList[moonsIndex].name}</h2>
              <p>
                {moonsList[moonsIndex].text}
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
