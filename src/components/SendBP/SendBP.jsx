import React from 'react';
import './SendBP.css';


class SendBP extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      urlSelect: '',
    };
    this.copyUrl = this.copyUrl.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    const { urlSelect } = this.state;
    if (prevState.urlSelect !== urlSelect) {
      this.copyUrl();
    }
  }

  copyUrl = () => {
    const copyText = document.getElementById('copyInput');
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand('copy');
  };

  render() {
    const { urlSelect } = this.state;
    const { favorites } = this.props;

    return (
      <div>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            const selectIn = document.getElementById('selectPicture');
            const choice = selectIn.selectedIndex;
            const urlSelectIn = selectIn.options[choice].value;
            this.setState({ urlSelect: urlSelectIn });
          }}
        >
          <label htmlFor="selectPicture">
            <select name="selectPicture" id="selectPicture" className="sbpSelect">
              <option value="" disabled selected hidden>Choose a picture</option>
              {favorites.map(
                (picture) => <option value={picture.url}>{picture.chosenName}</option>,
              )}
            </select>
          </label>
          <button type="submit" className="copyButton">Copy Urls</button>
          <input className="noneInput" type="text" value={urlSelect} id="copyInput" readOnly="true" />
        </form>
      </div>
    );
  }
}

export default SendBP;
