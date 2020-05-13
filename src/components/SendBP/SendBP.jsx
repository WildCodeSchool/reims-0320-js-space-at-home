import React from 'react';
import Axios from 'axios';
import './SendBP.css';


class SendBP extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { favorites } = this.props;
    const result = favorites.map((favorite) => favorite.url).join('\n');
    const copyAllUrl = () => {
      const copyText = document.getElementById('copyInput');
      copyText.select();
      copyText.setSelectionRange(0, 99999);
      document.execCommand('copy');
    };

    return (
      <div>
        <label htmlFor="selectPicture">
          <select name="selectPicture" id="selectPicture">
            <option>Choose an option</option>
            {favorites.map((picture) => <option>{picture.chosenName}</option>)}
          </select>
        </label>
        <input className="noneInput" type="textarea" value={result} id="copyInput" />
        <button type="button" onClick={() => copyAllUrl()}>Copy Urls</button>
      </div>
    );
  }
}

export default SendBP;
