import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { editStream, fetchStream } from '../../actions/';

const StreamEdit = (props) => {
    if(!props.streamToEdit){
        return <div>Loading....</div>
    }
  return <div>{props.streamToEdit.title}</div>;
};

const mapStateToProps = (state, ownProps) => {
  return { streamToEdit: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { editStream, fetchStream })(StreamEdit);
