import baseApi from "@/redux/api/baseApi";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        body: credentials,
      }),
      invalidatesTags: ["User"],
    }),
    register: builder.mutation({
      query: (data) => ({
        url: "/users/register",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["User"],
    }),
    socialAuth: builder.mutation({
      query: (data) => ({
        url: "/auth/social-login",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["User"],
    }),
    sendOtp: builder.mutation({
      query: (email) => ({
        url: "/auth/forgot-password",
        method: "POST",
        body: email,
      }),
    }),
    getMe: builder.query({
      query: () => ({
        url: "/users/me",
        method: "GET",
      }),
      providesTags: ["User"],
    }),
    verifyOtp: builder.mutation({
      query: (data: { email: string; otp: string }) => ({
        url: "/auth/verify-otp",
        method: "POST",
        body: data,
      }),
    }),
    resetPassword: builder.mutation({
      query: (data: { password: string }) => ({
        url: "/auth/reset-password",
        method: "POST",
        body: data,
      }),
    }),
    updateUser: builder.mutation({
      query: (data) => ({
        url: "/users/profile",
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useGetMeQuery,
  useSendOtpMutation,
  useVerifyOtpMutation,
  useResetPasswordMutation,
  useUpdateUserMutation,
  useSocialAuthMutation,
} = authApi;
