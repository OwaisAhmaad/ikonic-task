// store.js
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { authReducer } from "../features/authfeatures/authSlice";
import { authApi } from "../features/authfeatures/authApiSlice";
import { PostApi } from "../features/postsfeatures/authPostsSlice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
    [PostApi.reducerPath]: PostApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware, PostApi.middleware),
});

setupListeners(store.dispatch);
