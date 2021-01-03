import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

class GoogleAuth extends Component {
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
          this.onAuthChange(this.auth.isSignedIn.get());
        });
    });
  }

  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      this.props.signIn();
    }
    if (!isSignedIn) {
      this.props.signOut();
    }
  };

  onClickSignOut = () => {
    this.auth.signOut();
  };

  onClickSignIn = () => {
    this.auth.signIn();
  };

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null;
    }

    if (this.props.isSignedIn) {
      return (
        <button
          className='ui red google button'
          onClick={() => this.onClickSignOut()}
        >
          <i className='google icon' />
          Sign Out
        </button>
      );
    }

    return (
      <button
        className='ui red google button'
        onClick={() => this.onClickSignIn()}
      >
        <i className='google icon' />
        Sign In with Google
      </button>
    );
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
