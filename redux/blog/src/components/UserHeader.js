import { connect } from 'react-redux';
import React from 'redux';

const UserHeader = ({ user }) => {
  if (!user) {
    return <div>no data found</div>;
  }
  return <div>{user.name}</div>;
};

const mapStateToProps = (state, ownProps) => {
  return { user: state.users.find((user) => user.id === ownProps.userId) };
};

export default connect(mapStateToProps)(UserHeader);
