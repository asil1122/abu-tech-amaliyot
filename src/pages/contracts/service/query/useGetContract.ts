import { useQuery } from "@tanstack/react-query";
import { request } from "../../../../config/request";

interface contractType {
  data: {
    contracts: {
      attachment: {
        origName?: string, 
        size :number,
        url: string,
      },
      course: {
        createdAt: string,
        id: number,
        name: string,
      }[],
      createdAt: string,
      id: number,
      title: string
    }[]
  }
}


export const useGetContract = () => {
  return useQuery({
    queryKey: ['contract'],
    queryFn: () => request.get<contractType>('/api/staff/contracts/all').then((res) => res.data)
  });
}