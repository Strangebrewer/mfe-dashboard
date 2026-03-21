import { useQuery } from '@tanstack/react-query';
import carDataApi from '../api/carDataApi';

export const useGetCarData = () => {
  return useQuery({
    queryKey: ['get-car-data'],
    queryFn: async () => {
      const { data = [] } = await carDataApi.get();
      return data;
    },
  });
};
