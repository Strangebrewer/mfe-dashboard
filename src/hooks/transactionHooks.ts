import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { transactionApi } from '../api';

export const useGetTransactions = () => {
  return useQuery({
    queryKey: ['get-transactions'],
    queryFn: async () => {
      const { data = [] } = await transactionApi.get();
      return data;
    },
  });
};

export const useCreateTransaction = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ['create-transaction'],
    mutationFn: async (transaction: any) => {
      const response = await transactionApi.create(transaction);
      return response.data;
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['get-transactions'] }),
  });
};
