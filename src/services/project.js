import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQuery } from './baseQuery';

export const projectApi = createApi({
  baseQuery: baseQuery,
  reducerPath: 'project',
  tagTypes: [],
  endpoints: (builder) => ({
    getProjects: builder.query({
      query: () => ({
        url: 'projects',
      }),
    }),
    newProject: builder.mutation({
      query: (project) => ({
        url: '/projects/new',
        method: 'POST',
        body: project,
      }),
    }),
  }),
  
})

export const { useGetProjectsQuery, useNewProjectMutation, usePrefetch } = projectApi;