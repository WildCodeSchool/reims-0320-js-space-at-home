import React from 'react';
import Axios from 'axios';


class SendBP extends React.Component {
  constructor() {
    super();
    this.state = {
      textMail: 'Comment your selection !',
    };
  }

  componentDidUpdate(prevProps, prevState) {
    const { textMail } = this.state;
    if (prevState.textMail !== textMail) {
      this.render();
    }
  }

  submitMail() {
    Axios({
      method: 'POST',
      url: 'http://localhost:3002/send',
      data: this.state,
    }).then((response) => {
      if (response.data.status === 'success') {
        alert('Message Sent.');
        this.resetForm()
      }else if(response.data.status === 'fail') {
        alert('Message failed to send.');
      }
    });
  }

  render() {
    const { textMail } = this.state;
    return (
      <div>
        <form
          onSubmit={(event) => {
            const textMailIn = new FormData(event.target).get('sendMail');
            this.setState({ textMail: textMailIn });
            event.preventDefault();
            console.log(textMailIn);
          }}
        >
          <label htmlFor="sendMail">
            <input
              id="sendMail"
              name="sendMail"
              type="text"
              placeholder={textMail}
            />
          </label>
          <button type="submit">Send Mail</button>
        </form>
      </div>
    );}
}

export default SendBP;
