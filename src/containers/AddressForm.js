import React from 'react';
import { Field, reduxForm } from 'redux-form';

const required = value => (value ? undefined : 'Mandatory');
const textOnly = value => (/^[a-zA-Z]+$/.test(value) ? undefined : 'Letters only');

const renderField = ({
  input, label, type, meta: { touched, error, warning },
}) => (
  <div>
    <label htmlFor={label}>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} id={label} />
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  </div>
);

const AddressForm = (props) => {
  const {
    handleSubmit, pristine, reset, submitting,
  } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          name="country"
          component={renderField}
          type="text"
          placeholder="Country"
          validate={[required, textOnly]}
        />
        <Field
          name="city"
          component={renderField}
          type="text"
          placeholder="City"
          validate={[required, textOnly]}
        />
        <Field
          name="street"
          component={renderField}
          type="text"
          placeholder="Street"
          className="form-control"
        />
        <div>
          <button type="submit" disabled={pristine || submitting}>
            Submit
          </button>
          <button type="button" disabled={pristine || submitting} onClick={reset}>
            Clear
          </button>
        </div>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'AddressSearch', // a unique identifier for this form
})(AddressForm);
