import { configureStore, combineReducers } from '@reduxjs/toolkit'
import breadcrumbsReducer from 'reducers/breadCrumbReducer'
import { projectApi } from 'services/project'

const rootReducer = combineReducers({
  breadcrumbs: breadcrumbsReducer,
  [projectApi.reducerPath]: projectApi.reducer,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(projectApi.middleware)
})
