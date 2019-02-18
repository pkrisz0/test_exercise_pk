import React from 'react';
import { connect } from 'react-redux';

import AddressForm from './AddressForm';
import { searchAddress } from '../actions';

const Address = ({ handleSubmit }) => (
  <div>
    <AddressForm
      onSubmit={values => handleSubmit(values)}
    />
  </div>
);

const mapDispatchToProps = dispatch => ({
  handleSubmit: value => dispatch(searchAddress(value)),
});

export default connect(
  null,
  mapDispatchToProps,
)(Address);
