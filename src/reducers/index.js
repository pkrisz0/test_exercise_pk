import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { SEARCH_ADDRESS } from '../actions';

const initalState = {
  distance: undefined,
};

function distanceReducer(state = initalState, action) {
  switch (action.type) {
    case SEARCH_ADDRESS:
      return {
        ...state,
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
