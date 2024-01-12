import { createApi, fetchBaseQuery,  } from "@reduxjs/toolkit/query/react";

function getCookieValue(name) {
  const cookies = document.cookie.split(';');
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    if (cookie.startsWith(name + '=')) {
      return cookie.substring(name.length + 1);
    }
  }
  return null;
};

export const casesApi = createApi({
  reducerPath: "casesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://backend.aeep.ru/',
    prepareHeaders: (headers, { getState }) => {
      const token = getCookieValue('access_token');
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    }
  }),
  // tagTypes: ["UserInfo"],
  endpoints: (builder) => ({
    addRegistration: builder.mutation({
      query: (body) => ({
        url: "api/v1/account/signup",
        method: "POST",
        body
      }),
      // invalidatesTags: ["UserInfo"],
    }),
    fetchSteamLoginUrl: builder.mutation({
      query: (body) => ({
        url: '/api/v1/account/signin-social',
        method: 'POST',
        body: { type: 'steam' },
      }),
    }),
    fetchAuth: builder.mutation({
      query: (body) => ({
        url: "api/v1/account/signin",
        method: "POST",
        body
      }),
      invalidatesTags: ["UserInfo"],
    }),
    fetchCode: builder.mutation({
      query: (body) => ({
        url: "api/v1/account/signup-confirm",
        method: "POST",
        body
      })
    }),

    // PROFILE
    getUser: builder.query({
      query: () => ({
        url: `api/v1/account/profile/get`,
        method: "GET"
      }),
      providesTags: ['UserInfo'],
    }),
    getUserItems: builder.query({
      query: ({ start_price, end_price, page }) => {
        const params = {};
        if (start_price !== null) {
          params.start_price = start_price;
        }
        if (end_price !== null) {
          params.end_price = end_price;
        }
        if (page !== undefined) {
          params.page = page;
        }
        return {
          url: `api/v1/user/items/list`,
          method: 'GET',
          params,
        };
      },
    }),
    getItemSale: builder.query({
      query: (id) => ({
        url: `api/v1/user/item/sale/${id}`,
        method: "GET",
      }),
      invalidatesTags: ["UserInfo"],
    }),
    fetchTradeUrl: builder.mutation({
      query: (body) => ({
        url: `/api/v1/account/profile/set/trade_url`,
        method: "POST",
        body
      }),
    }),

    // CASE
    getCases: builder.query({
      query: () => `api/v1/cases/get`,
      method: "GET"
    }),
    getCaseByUrl: builder.query({
      query: (url) => ({
        url: `api/v1/case/get/${url}`,
        method: "GET"
      }) 
    }),
    getOpenCase: builder.query({
      query: (url) => ({
        url: `api/v1/case/open/${url}`,
        method: "GET"
      }),
      invalidatesTags: ["UserInfo"],
    }),
  }),
})

export const useGetCasesQuery = casesApi.endpoints.getCases.useQuery;
export const { 
  useAddRegistrationMutation, useFetchAuthMutation, useFetchSteamLoginUrlMutation, useFetchCodeMutation,
  useGetUserQuery, useGetUserItemsQuery, useGetItemSaleQuery, useFetchTradeUrlMutation,
  useLazyGetItemSaleQuery, useGetCaseByUrlQuery, useGetOpenCaseQuery, useLazyGetOpenCaseQuery
} = casesApi;