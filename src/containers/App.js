import connect from 'react-redux/es/connect/connect';
import React from 'react';
import Address from './Address';
import Result from './Result';

function App({ address }) {
  return (
    <div>
      <Address />
      { address ? <Result /> : ''}
    </div>
  );
}

const mapStateToProps = ({ distance }) => ({
  address: distance.current_address,
});

export default connect(
  mapStateToProps,
  null,
)(App);
