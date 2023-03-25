import { apiSlice } from ".";
import { IUser } from "../../interface";

export const usersSlice = apiSlice.injectEndpoints({
  endpoints: build => ({
      getUsers: build.query<IUser, void>({
        query: () => ({
          url: '/users',
          method: 'GET'
        })
      }),
      getUserById: build.mutation<IUser,number | unknown>({
        query: (id) => ({
          url: `/users/${id}`,
          method: 'GET'
        })
      })
  }),
  overrideExisting: false
})

export const {useGetUsersQuery, useGetUserByIdMutation} = usersSlice
