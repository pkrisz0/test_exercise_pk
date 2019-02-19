import React from 'react';
import { connect } from 'react-redux';

import AddressForm from './AddressForm';
import { searchAddress, clearAddress } from '../actions';

const Address = ({ handleSubmit, onClear }) => (
  <div>
    <AddressForm
      onSubmit={values => handleSubmit(values)}
      onClear={onClear}
    />
  </div>
);

const mapDispatchToProps = dispatch => ({
  handleSubmit: value => dispatch(searchAddress(value)),
  onClear: () => dispatch(clearAddress()),
});

export default connect(
  null,
  mapDispatchToProps,
)(Address);
