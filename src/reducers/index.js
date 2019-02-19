import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { GET_COORDINATES, CLEAR_ADDRESS } from '../actions';
import { getDistance } from '../helpers/calculate_distance';

const initalState = {
  distance: undefined,
  current_address: undefined,
};

function distanceReducer(state = initalState, action) {
  switch (action.type) {
    case GET_COORDINATES:
      return {
        ...state,
        current_address: action.query,
        distance: getDistance(action.results),
      };
    case CLEAR_ADDRESS:
      return {
        ...state,
        current_address: undefined,
      };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  form: formReducer,
  distance: distanceReducer,
});

export default rootReducer;
