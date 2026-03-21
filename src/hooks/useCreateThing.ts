import { useMutation } from '@tanstack/react-query';
import thingApi from '../api/thingApi';

export const useCreateThing = ({
  onSuccess,
  onError
}: {
  onSuccess?: (data: any) => void;
  onError?: (msg: string) => void;
}) => {
  return useMutation({
    mutationKey: ['new-thing'],
    mutationFn: async (payload: Record<string, any>) => {
      const response = await thingApi.create(payload);
      return response.data;
    },
    onSuccess,
    onError,
  });
};
