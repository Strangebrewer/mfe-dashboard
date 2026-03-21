import { useMutation } from '@tanstack/react-query';
import carDataApi from '../api/carDataApi';

export const useCreateCarData = ({
  onSuccess,
  onError,
}: {
  onSuccess?: (data: any) => void;
  onError?: (msg: string) => void;
}) => {
  return useMutation({
    mutationKey: ['new-car-data'],
    mutationFn: async (payload: Record<string, any>) => {
      const response = await carDataApi.create(payload);
      return response.data;
    },
    onSuccess,
    onError,
  });
};
