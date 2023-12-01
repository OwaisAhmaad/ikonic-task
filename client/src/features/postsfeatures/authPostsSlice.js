import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const getAuthToken = () => {
  const token = localStorage.getItem("token" || null);
  return token ? `Bearer ${token}` : "";
};
export const PostApi = createApi({
  reducerPath: "PostApi",
  tagTypes: ["POSTAPI"],
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = getAuthToken();
      if (token) {
        headers.set("Authorization", token);
      }
      headers.set("accept", "application/json");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    GetPostData: builder.query({
      query: () => ({
        url: "posts",
        method: "GET",
      }),
      providesTags: ["POSTAPI"],
    }),
    GetPostDataById: builder.query({
      query: (id) => ({
        url: `posts/${id}`,
        method: "GET",
      }),
      providesTags: ["POSTAPI"],
    }),
    AddPostData: builder.mutation({
      query: (params) => ({
        url: "posts",
        method: "post",
        body: params,
      }),
      invalidatesTags: ["POSTAPI"],
    }),

    EditPostData: builder.mutation({
      query: (params) => ({
        url: `posts/${params.id}`,
        method: "PATCH",
        body: params,
      }),
      invalidatesTags: ["POSTAPI"],
    }),

    DeletePost: builder.mutation({
      query: (id) => ({
        url: `posts/${id}`,
        method: "Delete",
      }),
      invalidatesTags: ["POSTAPI"],
    }),
  }),
});

export const {
  useGetPostDataQuery,
  useGetPostDataByIdQuery,
  useAddPostDataMutation,
  useEditPostDataMutation,
  useDeletePostMutation,
} = PostApi;
