import React from 'react';
import { Field, reduxForm } from 'redux-form';

const required = value => (value ? undefined : 'Mandatory field');
const textOnly = value => (/\p{L}/.test(value) ? 'Letters only!' : undefined);

const renderField = ({
  input, label, type, meta: { touched, error, warning },
}) => (
  <div>
    <div>
      <input {...input} placeholder={label} type={type} id={label} className='form-control'/>
    </div>
    {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
  </div>
);

const AddressForm = (props) => {
  const {
    handleSubmit, pristine, reset, submitting, onClear
  } = props;
  return (
    <form onSubmit={handleSubmit} >
        <Field
          name="country"
          label="Country"
          component={renderField}
          type="text"
          placeholder="Country"
          validate={[required, textOnly]}
        />
        <Field
          name="city"
          label="City"
          component={renderField}
          type="text"
          placeholder="City"
          validate={[required, textOnly]}
        />
        <Field
          name="street"
          label="Street"
          component={renderField}
          type="text"
          placeholder="Street"
          className="form-control"
        />
        <div>
          <button type="submit" disabled={pristine || submitting} className='btn btn-secondary btn-sm'>
            Submit
          </button>
          <button type="button" disabled={pristine || submitting} onClick={() => {reset(); onClear();}} className='btn btn-secondary btn-sm'>
            Clear
          </button>
        </div>
    </form>
  );
};

export default reduxForm({
  form: 'AddressSearch', // a unique identifier for this form
})(AddressForm);
