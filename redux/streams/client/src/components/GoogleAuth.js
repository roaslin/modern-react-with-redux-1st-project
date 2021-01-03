import React, { Component } from 'react';

class GoogleAuth extends Component {
  state = { isSignedIn: null };

  componentDidMount() {
    // init gapi client Google auth
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          clientId:
            '447041834490-ec0v40su2kbqaji7r8mq1hullnmrojst.apps.googleusercontent.com',
          scope: 'email',
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.auth.isSignedIn.listen(this.onAuthChange);
          this.setState({ isSignedIn: this.auth.isSignedIn.get() });
        });
    });
  }

  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  };

  onClickSignOut = () => {
    this.auth.signOut();
  };

  onClickSignIn = () => {
    this.auth.signIn();
  };

  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return null;
    }

    if (this.state.isSignedIn) {
      return (
        <button className='ui red google button' onClick={() => this.onClickSignOut()}>
          <i className='google icon' />
          Sign Out
        </button>
      );
    }

    return (
      <button className='ui red google button' onClick={() => this.onClickSignIn()}>
        <i className='google icon' />
        Sign In with Google
      </button>
    );
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

export default GoogleAuth;
