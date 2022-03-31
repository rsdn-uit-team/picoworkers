import { handleActions } from 'redux-actions'

export const initialState = {
  breadcrumbs: []
}

export default handleActions(
  {
    UPDATE_BREADCRUMBS: (state, action) => {
      return {
        ...state,
        breadcrumbs: action.payload
      }
    }
  },
  initialState
)
