import { useMutation } from "@tanstack/react-query";
import { fileType } from "../../components/modal/modal-types";
import { request } from "../../config/request";

export const useCreateFile = () => {
  return useMutation({
    mutationFn: (data: FormData) =>
      request
        .post<fileType>("/api/staff/upload/contract/attachment", data)
        .then((res) => res.data),
  });
};
