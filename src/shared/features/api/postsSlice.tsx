import { apiSlice } from ".";
import { IComment, IPost } from "../../interface";

export const postsSlice = apiSlice.injectEndpoints({
  endpoints: build => ({
      getPosts: build.query<IPost[], void>({
        query: () => ({
          url: '/posts',
          method: 'GET'
        })
      }),
      getComments: build.mutation<IComment[],number | unknown>({
        query: (id) => ({
          url: `/posts/${id}/comments`,
          method: 'GET'
        })
      })
  }),
  
  overrideExisting: false
})

export const {useGetPostsQuery, useGetCommentsMutation} = postsSlice
