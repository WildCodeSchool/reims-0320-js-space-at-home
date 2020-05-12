import React, { useState } from 'react';

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
