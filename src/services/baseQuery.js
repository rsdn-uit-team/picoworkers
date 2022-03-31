import { fetchBaseQuery } from '@reduxjs/toolkit/query'

export const baseQuery = fetchBaseQuery({
  baseUrl: 'https://61b073bd3c954f001722a3ca.mockapi.io',
  prepareHeaders: (headers, { getState }) => {

    const token = getState().auth?.token

    if (token) {
      headers.set('authorization', `Bearer ${token}`)
    }

    return headers
  },
});