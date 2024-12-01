import { useQuery } from "@tanstack/react-query";
import { request } from "../../../../config/request";

export const usePaginationPage = ({
  page,
  size,
}: {
  page: number;
  size: number;
}) => {
  return useQuery({
    queryKey: ["pagination", page, size],
    queryFn: () =>
      request
        .get(`/api/staff/contracts/all?page=${page}&size=${size}`)
        .then((res) => res.data),
  });
};
