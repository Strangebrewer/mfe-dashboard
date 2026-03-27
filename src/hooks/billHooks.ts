import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { billApi } from '../api';

export const useGetBills = () => {
  return useQuery({
    queryKey: ['get-bills'],
    queryFn: async () => {
      const { data = [] } = await billApi.get();
      return data;
    },
  });
};

export const useCreateBill = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ['create-account'],
    mutationFn: async (bill: any) => {
      const response = await billApi.create(bill);
      return response.data;
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['get-bills'] }),
  });
};
