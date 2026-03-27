import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { templateApi } from '../api';

export const useGetTemplates = () => {
  return useQuery({
    queryKey: ['get-templates'],
    queryFn: async () => {
      const { data = [] } = await templateApi.get();
      return data;
    },
  });
};

export const useCreateTemplate = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ['create-template'],
    mutationFn: async (template: any) => {
      const response = await templateApi.create(template);
      return response.data;
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['get-templates'] }),
  });
};
