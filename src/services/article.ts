import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const articleApi = createApi({
    reducerPath: "articleApi",
    baseQuery: fetchBaseQuery({ 
        baseUrl: "https://article-extractor-and-summarizer.p.rapidapi.com",
        prepareHeaders: (headers) => {
            headers.set('x-rapidapi-key', import.meta.env.VITE_RAPID_ARTICLE_KEY);
            headers.set('x-rapidapi-host', 'article-extractor-and-summarizer.p.rapidapi.com');
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getSummary: builder.query({
            query: (params) => `/summarize?url=${encodeURIComponent(params.url)}`,
        }),
    }),
});

export const { useLazyGetSummaryQuery, useGetSummaryQuery } = articleApi;