import React, { forwardRef } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createStream } from '../../actions';

const StreamCreate = ({ handleSubmit, createStream }) => {
  const renderInput = ({ input, label, meta: { touched, error } }) => {
    return (
      // Before destructuring
      //   <input
      //     onChange={input.onChange}
      //     value={input.value}
      //   />
      <div className='field'>
        <label>{label}</label>
        <input {...input} />
        {touched && error && <div className='ui error message'>{error}</div>}
      </div>
    );
  };

  const onSubmit = (formValues) => {
    createStream(formValues);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='ui form error'>
      <Field label='Enter Title' name='title' component={renderInput} />
      <Field
        label='Enter Description'
        name='description'
        component={renderInput}
      />
      <button className='ui button primary'>Submit</button>
    </form>
  );
};

const validate = (formValues) => {
  const errors = {};
  if (!formValues.title) {
    errors.title = 'You must enter a title';
  }

  if (!formValues.description) {
    errors.description = 'You must enter a description';
  }

  return errors;
};

const formWrapped = reduxForm({
  form: 'streamCreate',
  validate,
})(StreamCreate);

export default connect(null, { createStream })(formWrapped);
