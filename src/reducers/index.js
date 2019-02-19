import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { SEARCH_ADDRESS, CLEAR_ADDRESS } from '../actions';

const initalState = {
  distance: 3,
  current_address: undefined,
};

function distanceReducer(state = initalState, action) {
  switch (action.type) {
    case SEARCH_ADDRESS:
      return {
        ...state,
        current_address: action.query,
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
