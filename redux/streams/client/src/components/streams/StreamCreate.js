import React from 'react';
import { createStream } from '../../actions';
import StreamForm from './StreamForm';
import { connect } from 'react-redux';

const StreamCreate = ({ createStream }) => {
  const onSubmit = (formValues) => {
    createStream(formValues);
  };

  return <StreamForm formHeader='Create stream' onFormSubmit={onSubmit} />;
};

export default connect(null, { createStream })(StreamCreate);
