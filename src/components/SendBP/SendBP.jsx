import React from 'react';
import Axios from 'axios';


class SendBP extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const copyAllUrl = () => {
      const { favorites } = this.props;
      const result = favorites.map((favorite) => favorite.url).join('\n');
      document.execCommand('copy');
      alert('Copied the text: ' + result.value);
    };

    return (
      <div>
        <button type="button" onClick={() => copyAllUrl()}>Copy Urls</button>
      </div>
    );}
}

export default SendBP;
