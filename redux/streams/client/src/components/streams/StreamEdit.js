import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { editStream, fetchStream } from '../../actions/';
import StreamForm from './StreamForm';

const StreamEdit = (props) => {
  useEffect(() => {
    props.fetchStream(props.match.params.id);
  }, []);

  if (!props.streamToEdit) {
    return <div>Loading....</div>;
  }

  const onSubmit = (formValues) => {
    props.editStream(props.match.params.id, formValues);
  };

  return (
    <StreamForm
      initialValues={{
        title: props.streamToEdit.title,
        description: props.streamToEdit.description,
      }}
      formHeader='Edit stream'
      onFormSubmit={onSubmit}
    />
  );
};

const mapStateToProps = (state, ownProps) => {
  return { streamToEdit: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { editStream, fetchStream })(
  StreamEdit
);
