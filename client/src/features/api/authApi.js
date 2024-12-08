import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { userLoggedIn } from "../authSlice";

const USER_API = "http://localhost:8000/api/v1/user/";

const authApi = createApi({
  // name for the api slice
  reducerPath: "authApi",
  // configures base query with help of fetch
  baseQuery: fetchBaseQuery({
    baseUrl: USER_API,
    credentials: "include", // including cokkies & other cred in request
  }),
  // define all the endpoints for the Api
  // mutation - post & put & delete request
  // query - get request
  endpoints: (builder) => ({
    // register Api
    registerUser: builder.mutation({
      query: (formData) => ({
        url: "register",
        method: "POST",
        body: formData,
      }),
    }),
    // login Api
    loginUser: builder.mutation({
      query: (formData) => ({
        url: "login",
        method: "POST",
        body: formData,
      }),
      // onQueryStarted - will be called when the query is started
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          // dispatching the userLoggedIn action made in authSlice
          dispatch(userLoggedIn({ user: result.data.user }));
        } catch (error) {
          console.log(error);
        }
      },
    }),
  }),
});

export { authApi };
export const { useRegisterUserMutation, useLoginUserMutation } = authApi;
