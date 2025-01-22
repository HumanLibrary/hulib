import type { BaseQueryFn } from '@reduxjs/toolkit/query';
import type { EndpointBuilder } from '@reduxjs/toolkit/src/query/endpointDefinitions';

import type { PaginatedResponse } from '../../api';
import type { GetTopicsParams, Topic } from './index';

const getTopics = (build: EndpointBuilder<BaseQueryFn, string, string>) =>
  build.query<PaginatedResponse<Topic>, GetTopicsParams>({
    query: (params) => ({
      url: 'topics',
      params: {
        page: params?.page || 1,
        limit: params?.limit,
        name: params?.name,
      },
    }),
    serializeQueryArgs: ({ endpointName, queryArgs }) => {
      return `${endpointName}(${queryArgs?.name})`;
    },
    merge: (currentCache, newItems, { arg }) => {
      if (arg?.page === 1) {
        return newItems;
      }
      return {
        ...newItems,
        data: [...currentCache.data, ...newItems.data],
      };
    },
    forceRefetch: ({ currentArg, previousArg }) => {
      return (
        currentArg?.page !== previousArg?.page ||
        currentArg?.name !== previousArg?.name
      );
    },
    providesTags: (result) =>
      result
        ? [
            ...result.data.map(({ id }) => ({ type: 'Topics' as const, id })),
            { type: 'Topics' as const, id: 'LIST' },
          ]
        : [{ type: 'Topics' as const, id: 'LIST' }],
  });

export default getTopics;
