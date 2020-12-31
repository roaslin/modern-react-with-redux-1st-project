import React, { Component } from 'react';
import { createAccount } from '../actions';
import { connect } from 'react-redux';

class AddAccount extends Component {
  constructor(props) {
      super(props);
    this.state = { account: '' };
  }

  render() {
    return (
      <>
        <div className='ui tiny header'>Add account</div>
        <p></p>
        <div className='ui action input'>
          <input
            type='text'
            placeholder='Add account...'
            value={this.state.account}
            onChange={(e) => this.setState({ account: e.target.value })}
          />
          <button
            className='ui mini button'
            onClick={() => this.props.createAccount(this.state.account)}
          >
            Add
          </button>
        </div>
      </>
    );
  }
}

export default connect(null, { createAccount })(AddAccount);
