import React from 'react';
import './categories.css';

class Categories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  Opencard = () => onclick;

  render() {
    return (
      <div className="OpenCard">
        <br />
        <div className="block">
          <div className="Circle">
            <img alt="Earth" className="Earth" src="https://www.groupeadequat.com/wp-content/uploads/2017/03/earth-blue-planet-globe-planet-87651.jpeg" />
          </div>
          <div className="CategoriesTitle">
            <h2>Earth</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec tellus ipsum. Nunc sollicitudin rhoncus eleifend. Pellentesque aliquet libero elit, egestas aliquet arcu molestie a.
            </p>
            <p>
              Vivamus id ex ut ante faucibus sodales quis at tellus.Proin lectus dolor, convallis non rutrum in, mollis nec magna.
              Vestibulum pulvinar, urna et consectetur malesuada, est eros rutrum justo, eu aliquet enim tellus id quam.
              Integer accumsan ex metus, finibus euismod eros imperdiet quis.Phasellus rhoncus turpis vehicula magna volutpat aliquam.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Categories;
