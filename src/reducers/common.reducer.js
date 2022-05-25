import { SET_LOADING } from 'actions/common.action';

const initialState = {
  isLoading: false,
};

const CommonReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        isLoading: action.payload
      }
    default:
      return state;
  }
};

export default CommonReducer;
