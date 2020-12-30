import { Component } from 'react';
import { connect } from 'react-redux';
import React from 'redux';
import { fetchUser } from '../actions';

class UserHeader extends Component {
  componentDidMount() {
    this.props.fetchUser(this.props.userId);
  }

  render() {
    const user = this.props.users.find((user) => user.id === this.props.userId);
    if (user) {
      return <div>{user.name}</div>;
    }
    return <div>no data found</div>;
  }
}

const mapStateToProps = (state) => {
  return { users: state.users };
};

export default connect(mapStateToProps, { fetchUser })(UserHeader);
