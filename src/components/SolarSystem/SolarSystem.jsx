import React from 'react';
import './SolarSystem.css';

const SolarSystem = () => (
  <div>
    <div>
      <h1 className="SolarSystemH1">Solar System</h1>
      <div className="SolarSystemContent">
        <div className="opening hide-UI view-2D zoom-large data-close controls-close">
          <div id="universe" className="scale-stretched">
            <div id="solar-system" className="earth">
              <div id="mercury" className="orbit">
                <div className="pos">
                  <div className="planet" />
                </div>
              </div>
              <div id="venus" className="orbit">
                <div className="pos">
                  <div className="planet" />
                </div>
              </div>
              <div id="earth" className="orbit">
                <div className="pos">
                  <div className="orbit">
                    <div className="pos">
                      <div className="moon" />
                    </div>
                  </div>
                  <div className="planet" />
                </div>
              </div>
              <div id="mars" className="orbit">
                <div className="pos">
                  <div className="planet" />
                </div>
              </div>
              <div id="jupiter" className="orbit">
                <div className="pos">
                  <div className="planet" />
                </div>
              </div>
              <div id="saturn" className="orbit">
                <div className="pos">
                  <div className="planet">
                    <div className="ring" />
                  </div>
                </div>
              </div>
              <div id="uranus" className="orbit">
                <div className="pos">
                  <div className="planet" />
                </div>
              </div>
              <div id="neptune" className="orbit">
                <div className="pos">
                  <div className="planet" />
                </div>
              </div>
              <div id="sun" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <p className="SolarSystemP">
        The Solar System is the gravitationally bound system of the S
        un and the objects that orbit it, either directly or indir
        ectly. Of the objects that orbit the Sun directly, the lar
        gest are the eight planets, with the remainder being smal
        ler objects, the dwarf planets and small Solar System bo
        dies. Of the objects that orbit the S
        un indirectly—the moons—two are larger than the smallest planet, Mercury.
      </p>
    </div>
  </div>
);

export default SolarSystem;
