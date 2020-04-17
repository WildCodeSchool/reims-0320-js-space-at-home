import React from 'react';
import './SolarSystem.css';

const SolarSystem = () => (
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
);

export default SolarSystem;
