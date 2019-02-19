import axios from 'axios';
import API_KEY from '../helpers/key';

export const CLEAR_ADDRESS = 'CLEAR_ADDRESS';
export const GET_COORDINATES = 'GET_COORDINATES';

export function getCoordinates(results, query) {
  return {
    type: 'GET_COORDINATES',
    query,
    results,
  };
}

export function clearAddress() {
  return {
    type: 'CLEAR_ADDRESS',
  };
}

export function searchAddress(query) {
  return dispatch => axios.get('https://maps.googleapis.com/maps/api/geocode/json?address='+ Object.values(query).join('+') + '&key=' + API_KEY)
    .then((response) => {
      dispatch(getCoordinates(response.data.results[0].geometry.location, response.data.results[0].formatted_address));
    });
}