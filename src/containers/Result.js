import React from 'react';
import connect from 'react-redux/es/connect/connect';

const Result = ({ distance, address }) => (
  <div>
    <p>
      {Object.values(address).join(', ')} is {distance} meters from the office.
    </p>
  </div>
);

const mapStateToProps = ({ distance }) => ({
  distance: distance.distance,
  address: distance.current_address,
});

export default connect(
  mapStateToProps,
  null,
)(Result);
