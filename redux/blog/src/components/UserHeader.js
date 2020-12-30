import { Component } from 'react';
import { connect } from 'react-redux';
import React from 'redux';
import { fetchUser } from '../actions';

class UserHeader extends Component {
  componentDidMount() {
    this.props.fetchUser(this.props.userId);
  }

  render() {
    if (this.props.user) {
      return <div>{this.props.user.name}</div>;
    }
    return <div>no data found</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return { user: state.users.find((user) => user.id === ownProps.userId) };
};

export default connect(mapStateToProps, { fetchUser })(UserHeader);
