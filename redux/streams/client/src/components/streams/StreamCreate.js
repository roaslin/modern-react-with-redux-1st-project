import React, { Component } from 'react';
import { clearSubmitErrors, Field, reduxForm } from 'redux-form';
class StreamCreate extends Component {
  renderInput = ({ input, label, meta: { touched, error } }) => {
    return (
      // Before destructuring
      //   <input
      //     onChange={input.onChange}
      //     value={input.value}
      //   />
      <div className='field'>
        <label>{label}</label>
        <input {...input} />
        {touched && error && <span>{error}</span>}
      </div>
    );
  };

  onSubmit = (formValues) => {
    console.log(formValues);
  };

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className='ui form'
      >
        <Field label='Enter Title' name='title' component={this.renderInput} />
        <Field
          label='Enter Description'
          name='description'
          component={this.renderInput}
        />
        <button className='ui button primary'>Submit</button>
      </form>
    );
  }
}

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

export default reduxForm({
  form: 'streamCreate',
  validate,
})(StreamCreate);
