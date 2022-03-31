import { combineReducers } from 'redux';

import breadcrumb from './breadCrumbReducer';

const allReducers = combineReducers({
  breadcrumb,
});

const rootReducer = (state, action) => {
  if (action.type === 'CLEAR_STATE') state = {};
  return allReducers(state, action);
};

export default rootReducer;
